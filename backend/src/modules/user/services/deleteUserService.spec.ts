import AppError from "@shared/errors/appError";
import "reflect-metadata";
import FakeUsersRepository from "../repositories/fakes/fakeUsersRepository";
import CreateUserService from "./createUserService"
import DeleteUserService from "./deleteUserService";
import ShowUserService from "./showUserService";

let userRepository: FakeUsersRepository;

describe('delete user', () => {

  beforeEach(() => {
    userRepository = new FakeUsersRepository();
  })

  it('should be able to delete an user by its id', async () => {

    const createUserService = new CreateUserService(userRepository)

    const newUser = await createUserService.execute({
      name: 'Usuário A',
      cpf: '467.818.448-14',
      email: 'usuarioA@gmail.com',
      birthday: '1999-02-02',
      phone: '(11) 5698-9856',
      cellphone: '(11) 98547-3958'
    });

    const deleteUserService = new DeleteUserService(userRepository)

    let deletedUser = await deleteUserService.execute(newUser.id)

    let foundUser = await userRepository.findById(deletedUser.id)

    expect(foundUser).toBeUndefined()

  })

  it('should not be able to delete an user because it does not exists', async () => {

    const deleteUserService = new DeleteUserService(userRepository)

    await expect(deleteUserService.execute("54")).rejects.toBeInstanceOf(AppError)

  })

})
