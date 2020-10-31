import { injectable, inject } from 'tsyringe';
import Venue from '../entities/venue';
import IVenuesRepository from '../repositories/iVenuesRepository';

@injectable()
export default class UpdateVenueService {

    constructor(
        @inject('venuesRepository')
        private venuesRepository: IVenuesRepository
    ) { }

    execute = (venue: Venue) => this.venuesRepository.update(venue);
}