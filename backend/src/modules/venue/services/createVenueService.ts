import AppError from '@shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import ICreateVenueDTO from '../dtos/iCreateVenueDTO';
import Venue from '../entities/venue';
import IVenuesRepository from '../repositories/iVenuesRepository';

@injectable()
export default class CreateVenueService {

  constructor(
    @inject('venuesRepository')
    private venuesRepository: IVenuesRepository
  ) { }

  execute = async (venue: ICreateVenueDTO) => {

    //const foundedVenue = await this.venuesRepository.findById(venue)

    //if (foundedUser) throw new AppError('Usuário já existente!');

    return this.venuesRepository.create(venue);
  }
}
