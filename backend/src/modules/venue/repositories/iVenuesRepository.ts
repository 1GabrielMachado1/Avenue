import ICreateVenueDTO from '../dtos/iCreateVenueDTO';
import IUpdateVenueDTO from '../dtos/iUpdateVenueDTO';
import Venue from '../entities/venue';

export default interface IVenuesRepository {
    findAll(): Promise<Venue[]>
    findById(venueId: string): Promise<Venue>
    create(venue: ICreateVenueDTO): Promise<Venue>
    update(venue: IUpdateVenueDTO): Promise<Venue>
    delete(venueId: string): Promise<Venue>
}
