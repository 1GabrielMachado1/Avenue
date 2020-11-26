import AppError from '@shared/errors/appError';
import { injectable, inject } from 'tsyringe';
import IVenuesRepository from '../repositories/iVenuesRepository';

@injectable()
export default class DeleteVenueService {

  constructor(
    @inject('venuesRepository')
    private venuesRepository: IVenuesRepository
  ) { }

  execute = async (venueId: string) => {

    const toBeDeletedVenue = await this.venuesRepository.findById(venueId);

    if (!toBeDeletedVenue) throw new AppError('Estabelecimento inexistente!');

    await this.venuesRepository.delete(venueId);

    return toBeDeletedVenue;

  }
}
