import AppError from '@shared/errors/appError';
import { injectable, inject } from 'tsyringe';
import Venue from '../entities/venue';
import IVenuesRepository from '../repositories/iVenuesRepository';

@injectable()
export default class UpdateVenueService {

    constructor(
        @inject('venuesRepository')
        private venuesRepository: IVenuesRepository
    ) { }

    execute = (venue: Venue) => {

        if (!venue.id) throw new AppError('Local não informado!', 500)

        this.venuesRepository.update(venue);
    }

}