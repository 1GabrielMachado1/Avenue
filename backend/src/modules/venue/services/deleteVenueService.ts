import AppError from '@shared/errors/appError';
import { injectable, inject } from 'tsyringe';
import IVenuesRepository from '../repositories/iVenuesRepository';

@injectable()
export default class DeleteVenueService {

    constructor(
        @inject('venuesRepository')
        private venuesRepository: IVenuesRepository
    ) { }

    execute = (venueId: string) => {

        if (!venueId) throw new AppError('Id do local não informado!', 500)

        this.venuesRepository.delete(venueId);

    }
}