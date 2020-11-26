import AppError from '@shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/iUsersRepository';

@injectable()
export default class ShowUserService {
  constructor(
    @inject('usersRepository')
    private userRepository: IUsersRepository,
  ) { }

  execute = async (userId: string) => {

    const user = await this.userRepository.findById(userId)

    if (!user) throw new AppError('Usuário inexistente!')

    return user
  }
}
