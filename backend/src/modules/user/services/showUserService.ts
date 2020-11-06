import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/iUsersRepository';

@injectable()
export default class ShowUserService {

    constructor(
        @inject('usersRepository')
        private userRepository: IUsersRepository
    ) { }

    execute = (id: string) => this.userRepository.findOne(id)
}