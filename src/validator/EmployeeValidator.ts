import Joi from 'joi'

const EmployeeValidatorCreate = Joi.object({
  _id: Joi.string()
    .forbidden(),
  name: Joi.string()
    .required(),
  cpf: Joi.string()
    .required()
    .min(11)
    .max(11)
    .pattern(/^[0-9]+$/),
  office: Joi.string()
    .required()
    .valid('gerente', 'vendedor', 'caixa'),
  birthday: Joi.date()
    .iso()
    .max('now')
    .required(),
  situation: Joi.string()
    .forbidden()
    .default('activate')
    .valid('activate', 'deactivate')
})

const EmployeeValidatorUpdate = Joi.object({
  _id: Joi.string()
    .forbidden(),
  name: Joi.string(),
  cpf: Joi.string()
    .min(11)
    .max(11)
    .pattern(/^[0-9]+$/),
  office: Joi.string()
    .valid('gerente', 'vendedor', 'caixa'),
  birthday: Joi.date()
    .iso()
    .max('now'),
  situation: Joi.string()
    .valid('activate', 'deactivate')
})

export { EmployeeValidatorCreate, EmployeeValidatorUpdate }
