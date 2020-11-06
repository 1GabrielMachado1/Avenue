import { container } from 'tsyringe'
import { Request, Response, NextFunction } from 'express'
import CreateUserService from '@modules/user/services/createUserService'
import UpdateUserService from '@modules/user/services/updateUserService'
import DeleteUserService from '@modules/user/services/deleteUserService'
import ShowUserService from '@modules/user/services/showUserService'

export default class UserController {

    async show(req: Request, res: Response, next: NextFunction) {
        const showUserService = container.resolve(ShowUserService)
        const user = await showUserService.execute(req.params.id)

        return res.status(200).json(user)

    }

    async create(req: Request, res: Response, next: NextFunction) {
        
        const createUserService = container.resolve(CreateUserService)
        const user = await createUserService.execute(req.body)

        return res.status(201).json(user)

    }

    async update(req: Request, res: Response, next: NextFunction) {
        const updateUserService = container.resolve(UpdateUserService)
        const user = await updateUserService.execute(req.body)

        return res.status(200).json(user)

    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const deleteUserService = container.resolve(DeleteUserService)
        const user = await deleteUserService.execute(req.params.id)

        return res.status(200).json(user)

    }

}