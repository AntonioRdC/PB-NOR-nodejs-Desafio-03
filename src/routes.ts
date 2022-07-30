import { Router } from 'express'

import EmployeeController from './controllers/EmployeeController'

const routes = Router()

routes.get('/employee', EmployeeController.index)
routes.post('/employee', EmployeeController.store)

export default routes
