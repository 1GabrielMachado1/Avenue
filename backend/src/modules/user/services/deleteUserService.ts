import AppError from '@shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/iUsersRepository';

@injectable()
export default class DeleteUserService {
    constructor(
        @inject('usersRepository')
        private userRepository: IUsersRepository,
    ) { }

    execute = async (userId: string) => {

        const toBeDeletedUser = await this.userRepository.findById(userId);

        if (!toBeDeletedUser) throw new AppError('Usuário inexistente!');

        await this.userRepository.delete(userId);

        return toBeDeletedUser;
    };
}
