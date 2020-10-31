import Venue from '../entities/venue'
import IVenuesRepository from './iVenuesRepository'

export default class VenueRepository implements IVenuesRepository {
    private venues: Venue[] = [];

    async findAll(): Promise<Venue[]> {
        return this.venues
    }

    async create(venue: Venue): Promise<Venue> {

        this.venues.push(venue)

        return venue
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