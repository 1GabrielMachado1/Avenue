import AppError from '@shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import Venue from '../entities/venue';
import IVenuesRepository from '../repositories/iVenuesRepository';

@injectable()
export default class CreateVenueService {

    constructor(
        @inject('venuesRepository')
        private venuesRepository: IVenuesRepository
    ) { }

    execute = (venue: Venue) => {

        if (!venue.id) throw new AppError('Local não informado!', 500)

        this.venuesRepository.create(venue);
    }
}