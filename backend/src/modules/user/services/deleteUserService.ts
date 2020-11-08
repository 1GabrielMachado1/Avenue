import AppError from '@shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/iUsersRepository';

@injectable()
export default class DeleteUserService {

    constructor(
        @inject('usersRepository')
        private userRepository: IUsersRepository
    ) { }

    execute = (userId: string) => {

        if (!userId) throw new AppError('Id do usuário não informado!', 500)

        this.userRepository.delete(userId)
    }
}