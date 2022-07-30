import { Request, Response } from 'express'

import Product from '../schemas/Product'
import Employee from '../schemas/Employee'
import { ProductValidatorCreate, ProductValidatorUpdate } from '../validator/ProductValidator'

class ProductController {
  public async store (req: Request, res: Response): Promise<Response> {
    req.body.price = Number(req.body.price).toFixed(2)

    try {
      await ProductValidatorCreate.validateAsync({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        employee_id: req.body.employee_id
      })

      const employee = await Employee.find({
        _id: req.body.employee_id,
        office: 'gerente',
        situation: 'activate'
      })

      if (employee.length === 0) {
        return res.status(400).json({ message: 'Employee invalid' })
      }

      const product = await Product.create(req.body)

      return res.status(201).json(product)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }

  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const product = await Product.find({
        name: { $regex: req.query.name || '' },
        category: { $regex: req.query.category || '' },
        price: { $regex: req.query.price || '' }
      })

      return res.status(200).json(product)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}

export default new ProductController()
