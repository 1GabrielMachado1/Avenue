import AppError from "@shared/errors/appError";
import "reflect-metadata";
import FakeUsersRepository from "../repositories/fakes/fakeUsersRepository";
import CreateUserService from "./createUserService"

let userRepository: FakeUsersRepository;

describe('create user', () => {

    beforeEach(() => {
        userRepository = new FakeUsersRepository();
    })

    it('should be able to create an user', async () => {
        const createUserService = new CreateUserService(userRepository);
        const user = await createUserService.execute({
            name: 'Usuário A',
            cpf: '467.818.448-14',
            email: 'usuarioA@gmail.com',
            birthday: '1999-02-02',
            phone: '(11) 5698-9856',
            cellphone: '(11) 98547-3958'
        });

        expect(user).toHaveProperty('name')

    })

    it('should not be able to create an user because it already exists', async () => {

        const createUserService = new CreateUserService(userRepository);

        await createUserService.execute({
            name: 'Usuário A',
            cpf: '467.818.448-14',
            email: 'usuarioA@gmail.com',
            birthday: '1999-02-02',
            phone: '(11) 5698-9856',
            cellphone: '(11) 98547-3958'
        });

        await expect(createUserService.execute({
            name: 'Usuário A',
            cpf: '467.818.448-14',
            email: 'usuarioA@gmail.com',
            birthday: '1999-02-02',
            phone: '(11) 5698-9856',
            cellphone: '(11) 98547-3958'
        })).rejects.toBeInstanceOf(AppError)

    })

})
