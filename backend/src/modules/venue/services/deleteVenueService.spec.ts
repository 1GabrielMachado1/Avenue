import "reflect-metadata";
import AppError from "@shared/errors/appError";
import FakeVenuesRepository from "../repositories/fakes/fakeVenuesRepository";
import CreateVenueService from "./createVenueService"
import DeleteVenueService from "./deleteVenueService";
import ListVenueService from "./listVenueService";

let venueRepository: FakeVenuesRepository;
let listVenueService: ListVenueService;
let createVenueService: CreateVenueService;
let deleteVenueService: DeleteVenueService;

describe('delete venue', () => {

    beforeEach(() => {
        venueRepository = new FakeVenuesRepository();
        listVenueService = new ListVenueService(venueRepository)
        createVenueService = new CreateVenueService(venueRepository);
        deleteVenueService = new DeleteVenueService(venueRepository);
    })

    it('should be able to create a venue', async () => {

        let venue = await createVenueService.execute({
            ownerId: "456788",
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

        await deleteVenueService.execute(venue.id)

        let venues = await listVenueService.execute()

        expect(venues).toEqual(expect.arrayContaining([]));

    })

    it('should not be able to delete a venue because it does not exists', async () => {

        let venue = await createVenueService.execute({
            ownerId: "456788",
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

        await deleteVenueService.execute(venue.id)

        await expect(deleteVenueService.execute("456788")).rejects.toBeInstanceOf(AppError)

    })
})
