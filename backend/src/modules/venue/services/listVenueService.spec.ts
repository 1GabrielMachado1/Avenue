import "reflect-metadata";
import FakeVenuesRepository from "../repositories/fakes/fakeVenuesRepository";
import CreateVenueService from "./createVenueService"
import ListVenueService from "./listVenueService";

let venueRepository: FakeVenuesRepository;
let createVenueService: CreateVenueService;
let listVenueService: ListVenueService;

describe('list all venues', () => {

  beforeEach(() => {
    venueRepository = new FakeVenuesRepository();
    createVenueService = new CreateVenueService(venueRepository);
    listVenueService = new ListVenueService(venueRepository);
  })

  it('should be able to list all venues', async () => {

    let venue1 = await createVenueService.execute({
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

    let venue2 = await createVenueService.execute({
      ownerId: "789456",
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

    let venues = await listVenueService.execute()

    await expect(venues).toEqual([venue1, venue2])

  })

})
