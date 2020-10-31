import { inject, injectable } from 'tsyringe';
import Venue from '../entities/venue';
import IVenuesRepository from '../repositories/iVenuesRepository';

@injectable()
export default class CreateVenueService {

    constructor(
        @inject('venuesRepository')
        private venuesRepository: IVenuesRepository
    ) { }

    execute = (venue: Venue) => this.venuesRepository.create(venue);
}