import "reflect-metadata";
import FakeUsersRepository from "@modules/user/repositories/fakes/fakeUsersRepository";
import CreateUserService from "@modules/user/services/createUserService";
import AppError from "@shared/errors/appError";
import FakeVenuesRepository from "../repositories/fakes/fakeVenuesRepository";
import CreateVenueService from "./createVenueService"

let venueRepository: FakeVenuesRepository;
let userRepository: FakeUsersRepository;
let createVenueService: CreateVenueService;
let createUserService: CreateUserService;

describe('create venue', () => {

    beforeEach(() => {
        venueRepository = new FakeVenuesRepository();
        userRepository = new FakeUsersRepository()
        createVenueService = new CreateVenueService(venueRepository);
        createUserService = new CreateUserService(userRepository);
    })

    it('should be able to create a venue', async () => {

        const user = await createUserService.execute({
            name: 'Usuário A',
            cpf: '467.818.448-14',
            email: 'usuarioA@gmail.com',
            birthday: '1999-02-02',
            phone: '(11) 5698-9856',
            cellphone: '(11) 98547-3958'
        });

        let venue = await createVenueService.execute({
            ownerId: user.id,
            title: "Party House",
            address: "Rua A",
            number: "123",
            category: "Categoria A",
            city: "Guarulhos",
            description: "Casa de shows",
            district: "Bairro A",
            phone: "(11) 8546-9854",
            state: "São Paulo",
            zipCode: "05689-845"
        })

        expect(venue).toHaveProperty("id");

    })


    // it('should not be able to create a venue because it already exists', async () => {

    //     const user = await createUserService.execute({
    //         name: 'Usuário A',
    //         cpf: '467.818.448-14',
    //         email: 'usuarioA@gmail.com',
    //         birthday: '1999-02-02',
    //         phone: '(11) 5698-9856',
    //         cellphone: '(11) 98547-3958'
    //     });

    //     await expect(createVenueService.execute({
    //         ownerId: user.id,
    //         title: "Party House",
    //         address: "Rua A",
    //         number: "123",
    //         category: "Categoria A",
    //         city: "Guarulhos",
    //         description: "Casa de shows",
    //         district: "Bairro A",
    //         phone: "(11) 8546-9854",
    //         state: "São Paulo",
    //         zipCode: "05689-845"
    //     })).rejects.toBeInstanceOf(AppError)

    // })

})
