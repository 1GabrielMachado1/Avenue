import Venue from '../entities/venue';

export default interface IVenuesRepository {
    findAll(): Promise<Venue[]>
    create(venue: Venue): Promise<Venue>
    update(venue: Venue): Promise<Venue>
    delete(venueId: string): Promise<Venue>
}