import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/appError';
import IUsersRepository from '../repositories/iUsersRepository';
import ICreateUserDTO from '../dtos/iCreateUserDTO';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('usersRepository')
    private userRepository: IUsersRepository,
  ) { }

  execute = async (user: ICreateUserDTO) => {

    const foundedUser = await this.userRepository.findByEmail(user.email)

    if (foundedUser) throw new AppError('Usuário já existente!');

    return this.userRepository.create(user);
  }
}
