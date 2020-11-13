import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/appError';
import User from '../entities/user';
import IUsersRepository from '../repositories/iUsersRepository';

@injectable()
export default class CreateUserService {
    constructor(
        @inject('usersRepository')
        private userRepository: IUsersRepository,
    ) { }

    execute = (user: User) => {
        if (!user.id) throw new AppError('Usuário não informado!');

        this.userRepository.create(user);
    }
}
