import AppError from "@shared/errors/appError";
import "reflect-metadata";
import FakeVenuesRepository from "../repositories/fakes/fakeVenuesRepository";
import CreateVenueService from "./createVenueService"
import UpdateVenueService from "./updateVenueService";

let venueRepository: FakeVenuesRepository;
let createVenueService: CreateVenueService;
let updateVenueService: UpdateVenueService;

describe('update venue', () => {

    beforeEach(() => {
        venueRepository = new FakeVenuesRepository();
        createVenueService = new CreateVenueService(venueRepository);
        updateVenueService = new UpdateVenueService(venueRepository);
    })

    it('should be able to list all venues', async () => {

        let venue = await createVenueService.execute({
            ownerId: "123456",
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

        const updatedVenue = await updateVenueService.execute({
            id: venue.id,
            title: "Happy House"
        });

        expect(updatedVenue.title).toBe("Happy House");

    })

    it('should not be able to update a venue because it does not exists', async () => {

        await createVenueService.execute({
            ownerId: "123456",
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

        await expect(updateVenueService.execute({
            id: "AAA",
            title: "Happy House"
        })).rejects.toBeInstanceOf(AppError)

    })

})
