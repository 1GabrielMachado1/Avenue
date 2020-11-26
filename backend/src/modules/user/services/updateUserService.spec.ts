import AppError from "@shared/errors/appError";
import "reflect-metadata";
import FakeUsersRepository from "../repositories/fakes/fakeUsersRepository";
import CreateUserService from "./createUserService"
import ShowUserService from "./showUserService";
import UpdateUserService from "./updateUserService";

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

    const updateUserService = new UpdateUserService(userRepository);

    const updatedUser = await updateUserService.execute({
      id: newUser.id,
      name: "Usuário A Atualizado"
    });

    expect(updatedUser.name).toBe("Usuário A Atualizado");

  })

  it('should not be able to update an user because it does not exists', async () => {

    const createUserService = new CreateUserService(userRepository);

    const newUser = await createUserService.execute({
      name: 'Usuário A',
      cpf: '467.818.448-14',
      email: 'usuarioA@gmail.com',
      birthday: '1999-02-02',
      phone: '(11) 5698-9856',
      cellphone: '(11) 98547-3958'
    });

    const updateUserService = new UpdateUserService(userRepository);

    await expect(updateUserService.execute({
      id: "A2",
      name: "Usuário A Atualizado"
    })).rejects.toBeInstanceOf(AppError)

  })


  it('should not be able to update an user because informed e-mail already exists', async () => {

    const createUserService = new CreateUserService(userRepository);

    const newUser = await createUserService.execute({
      name: 'Usuário A',
      cpf: '467.818.448-14',
      email: 'usuarioA@gmail.com',
      birthday: '1999-02-02',
      phone: '(11) 5698-9856',
      cellphone: '(11) 98547-3958'
    });

    const updateUserService = new UpdateUserService(userRepository);

    await expect(updateUserService.execute({
      id: newUser.id,
      email: newUser.email,
      name: "Usuário A Atualizado"
    })).rejects.toBeInstanceOf(AppError)

  })

})
