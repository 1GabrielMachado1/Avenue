import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/iUsersRepository';

@injectable()
export default class DeleteUserService {

    constructor(
        @inject('usersRepository')
        private userRepository: IUsersRepository
    ) { }

    execute = (userId: string) => this.userRepository.delete(userId)
}