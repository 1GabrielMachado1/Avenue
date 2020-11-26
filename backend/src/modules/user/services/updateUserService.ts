import AppError from '@shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import IUpdateUserDTO from '../dtos/iUpdateUserDTO';
import User from '../entities/user';
import IUsersRepository from '../repositories/iUsersRepository';

@injectable()
export default class UpdateUserService {
  constructor(
    @inject('usersRepository')
    private userRepository: IUsersRepository,
  ) { }

  execute = async (user: IUpdateUserDTO) => {

    let toBeUpdatedUser: User | undefined;

    toBeUpdatedUser = await this.userRepository.findById(user.id);

    if (!toBeUpdatedUser) throw new AppError('Usuário inexistente!');

    if (user.email) {

      toBeUpdatedUser = await this.userRepository.findByEmail(user.email);

      if (toBeUpdatedUser) throw new AppError('O e-mail informado já existe em outro usuário!');
    }

    return await this.userRepository.update(user);
  };
}
