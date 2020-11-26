import AppError from "@shared/errors/appError";
import "reflect-metadata";
import FakeUsersRepository from "../repositories/fakes/fakeUsersRepository";
import CreateUserService from "./createUserService"
import ShowUserService from "./showUserService";

let userRepository: FakeUsersRepository;

describe('show user', () => {

  beforeEach(() => {
    userRepository = new FakeUsersRepository();
  })

  it('should be able to list an user by its id', async () => {

    const createUserService = new CreateUserService(userRepository);

    const newUser = await createUserService.execute({
      name: 'Usuário A',
      cpf: '467.818.448-14',
      email: 'usuarioA@gmail.com',
      birthday: '1999-02-02',
      phone: '(11) 5698-9856',
      cellphone: '(11) 98547-3958'
    });

    const showUserService = new ShowUserService(userRepository);
    const user = await showUserService.execute(newUser.id);

    expect(user.name).toBe("Usuário A");

  })

  it('should not be able to list an user because it does not exists', async () => {

    const showUserService = new ShowUserService(userRepository);

    await expect(showUserService.execute("210")).rejects.toBeInstanceOf(AppError)

  })

})
