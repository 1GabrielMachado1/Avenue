import { container } from 'tsyringe'
import IVenuesRepository from '../../modules/venue/repositories/iVenuesRepository'
import VenuesRepository from '../../modules/venue/repositories/fakes/fakeVenuesRepository'
import IUsersRepository from '../../modules/user/repositories/iUsersRepository'
import UsersRepository from '../../modules/user/repositories/fakes/fakeUsersRepository'

container.registerSingleton<IVenuesRepository>('venuesRepository', VenuesRepository)
container.registerSingleton<IUsersRepository>('usersRepository', UsersRepository)
