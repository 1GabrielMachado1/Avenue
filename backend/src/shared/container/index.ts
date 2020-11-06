import { container } from 'tsyringe'
import IVenuesRepository from '../../modules/venue/repositories/iVenuesRepository'
import VenuesRepository from '../../modules/venue/repositories/venuesRepository'
import IUsersRepository from '../../modules/user/repositories/iUsersRepository'
import UsersRepository from '../../modules/user/repositories/usersRepository'

container.registerSingleton<IVenuesRepository>('venuesRepository', VenuesRepository)
container.registerSingleton<IUsersRepository>('usersRepository', UsersRepository)