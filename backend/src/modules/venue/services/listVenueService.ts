import { inject, injectable } from 'tsyringe';
import IVenuesRepository from '../repositories/iVenuesRepository';

@injectable()
export default class ListVenueService {

  constructor(
    @inject('venuesRepository')
    private venuesRepository: IVenuesRepository
  ) { }

  execute = async () => await this.venuesRepository.findAll();
}
