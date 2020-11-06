import { Router } from 'express'
import UserController from '../controllers/userController'

const usersRouter = Router()
const usersController = new UserController()

usersRouter.post('/', usersController.create)
usersRouter.get('/:id', usersController.show)
usersRouter.put('/', usersController.update)
usersRouter.delete('/:id', usersController.delete)

export default usersRouter