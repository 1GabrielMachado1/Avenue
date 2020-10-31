import IVenuesRepository from '../../modules/venue/repositories/iVenuesRepository'
import VenueRepository from '../../modules/venue/repositories/venuesRepository'
import { container } from 'tsyringe'

container.registerSingleton<IVenuesRepository>('venuesRepository', VenueRepository)