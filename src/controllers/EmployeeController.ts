import { Request, Response } from 'express'

import Employee from '../schemas/Employee'
import { EmployeeValidatorCreate, EmployeeValidatorUpdate } from '../validator/EmployeeValidator'

class EmployeeController {
  // Successs
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
}

export default new EmployeeController()
