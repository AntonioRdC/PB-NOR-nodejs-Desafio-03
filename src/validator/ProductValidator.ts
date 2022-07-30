import Joi from 'joi'

const ProductValidatorCreate = Joi.object({
  name: Joi.string()
    .required(),
  category: Joi.string()
    .required(),
  price: Joi.number()
    .required()
    .precision(2),
  employee_id: Joi.string()
    .required()
})

const ProductValidatorUpdate = Joi.object({
  name: Joi.string(),
  category: Joi.string(),
  price: Joi.number()
    .precision(2),
  employee_id: Joi.string()
})

export { ProductValidatorCreate, ProductValidatorUpdate }
