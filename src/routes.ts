import { Router } from 'express'

import EmployeeController from './controllers/EmployeeController'
import ProductController from './controllers/ProductController'

const routes = Router()

routes.get('/employee', EmployeeController.index)
routes.post('/employee', EmployeeController.store)
routes.put('/employee/:id', EmployeeController.update)
routes.delete('/employee/:id', EmployeeController.delete)

routes.post('/product', ProductController.store)
routes.get('/product', ProductController.index)
routes.put('/product/:id', ProductController.update)
routes.delete('/product/:id', ProductController.delete)

export default routes
