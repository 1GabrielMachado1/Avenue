import AppError from '@shared/errors/appError';
import { injectable, inject } from 'tsyringe';
import IUpdateVenueDTO from '../dtos/iUpdateVenueDTO';
import Venue from '../entities/venue';
import IVenuesRepository from '../repositories/iVenuesRepository';

@injectable()
export default class UpdateVenueService {

    constructor(
        @inject('venuesRepository')
        private venuesRepository: IVenuesRepository
    ) { }

    execute = async (venue: IUpdateVenueDTO) => {

        let toBeUpdatedVenue: Venue | undefined;

        toBeUpdatedVenue = await this.venuesRepository.findById(venue.id);

        if (!toBeUpdatedVenue) throw new AppError('Estabelecimento inexistente!');

        return await this.venuesRepository.update(venue);
    }

}
