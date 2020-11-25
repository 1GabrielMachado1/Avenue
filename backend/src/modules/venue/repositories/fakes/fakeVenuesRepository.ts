import ICreateVenueDTO from '@modules/venue/dtos/iCreateVenueDTO';
import { uuid } from 'uuidv4';
import Venue from '../../entities/venue'
import IVenuesRepository from '../iVenuesRepository'

export default class VenueRepository implements IVenuesRepository {
    private venues: Venue[] = [];

    async findAll(): Promise<Venue[]> {
        return this.venues
    }

    async findById(id: string): Promise<Venue> {

        const [venue] = this.venues.filter(u => u.id === id)

        return venue
    }

    async create(venue: ICreateVenueDTO): Promise<Venue> {

        const newVenue = new Venue()

        Object.assign(newVenue, { id: uuid(), ...venue })

        this.venues.push(newVenue)

        return newVenue
    }

    async update(venue: Venue): Promise<Venue> {

        const currentVenueIndex = this.venues.findIndex(v => v.id === venue.id)

        this.venues[currentVenueIndex] = venue;

        return this.venues[currentVenueIndex]
    }

    async delete(venueId: string): Promise<Venue> {

        const currentVenueIndex = this.venues.findIndex(v => v.id === venueId)

        const deleted = this.venues[currentVenueIndex];

        this.venues.splice(currentVenueIndex, 1)

        return deleted
    }
}
