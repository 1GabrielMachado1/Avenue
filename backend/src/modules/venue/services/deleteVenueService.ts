import { injectable, inject } from 'tsyringe';
import IVenuesRepository from '../repositories/iVenuesRepository';

@injectable()
export default class DeleteVenueService {

    constructor(
        @inject('venuesRepository')
        private venuesRepository: IVenuesRepository
    ) { }

    execute = (venueId: string) => this.venuesRepository.delete(venueId);
}