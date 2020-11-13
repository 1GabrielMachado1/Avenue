import AppError from '@shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/iUsersRepository';

@injectable()
export default class ShowUserService {
    constructor(
        @inject('usersRepository')
        private userRepository: IUsersRepository,
    ) { }

    execute = (userId: string) => {
        if (!userId) throw new AppError('Id do usuário não informado!');

        return this.userRepository.findOne(userId);
    }
}
