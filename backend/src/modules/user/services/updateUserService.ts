import { inject, injectable } from 'tsyringe';
import User from '../entities/user';
import IUsersRepository from '../repositories/iUsersRepository';

@injectable()
export default class UpdateUserService {

    constructor(
        @inject('usersRepository')
        private userRepository: IUsersRepository
    ) { }

    execute = (user: User) => this.userRepository.update(user)
}