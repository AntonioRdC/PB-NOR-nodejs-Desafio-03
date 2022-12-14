import { Request, Response } from 'express'

import Employee from '../schemas/Employee'
import { EmployeeValidatorCreate, EmployeeValidatorUpdate } from '../validator/EmployeeValidator'

class EmployeeController {
  public async store (req: Request, res: Response): Promise<Response> {
    const [day, month, year] = req.body.birthday.split('/')
    const birthdayValidator = [year, month, day].join('-')

    try {
      await EmployeeValidatorCreate.validateAsync({
        _id: req.body._id,
        name: req.body.name,
        cpf: req.body.cpf,
        office: req.body.office,
        birthday: birthdayValidator,
        situation: req.body.situation
      })

      const employee = await Employee.create({
        name: req.body.name,
        cpf: req.body.cpf,
        office: req.body.office,
        birthday: req.body.birthday,
        situation: req.body.situation
      })

      employee.cpf = employee.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

      return res.status(201).json(employee)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }

  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const employee = await Employee.paginate({
        name: { $regex: req.query.name || '' },
        cpf: { $regex: req.query.cpf || '' },
        office: { $regex: req.query.office || '' },
        birthday: { $regex: req.query.birthday || '' },
        situation: { $regex: req.query.situation || '' }
      }, {
        customLabels: {
          page: 'currentPage',
          totalPages: 'totalPages',
          limit: 'pageSize',
          totalDocs: 'totalCount',
          offset: false,
          pagingCounter: false,
          hasPrevPage: false,
          hasNextPage: false,
          prevPage: false,
          nextPage: false
        }
      })

      return res.status(200).json(employee)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const [day, month, year] = req.body.birthday.split('/')
    const birthdayValidator = [year, month, day].join('-')

    try {
      await EmployeeValidatorUpdate.validateAsync({
        name: req.body.name,
        cpf: req.body.cpf,
        office: req.body.office,
        birthday: birthdayValidator,
        situation: req.body.situation
      })

      const employee = await Employee.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { returnDocument: 'after', runValidators: true }
      )

      employee.cpf = employee.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

      return res.status(200).json(employee)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      await Employee.findByIdAndDelete(req.params.id)

      return res.status(204).json({})
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}

export default new EmployeeController()
