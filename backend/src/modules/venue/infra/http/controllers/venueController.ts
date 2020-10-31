import { container } from 'tsyringe'
import { Request, Response, NextFunction } from 'express'
import UpdateVenueService from '../../../../../modules/venue/services/updateVenueService'
import CreateVenueService from '../../../../../modules/venue/services/createVenueService';
import ListVenueService from '../../../../../modules/venue/services/listVenueService'
import DeleteVenueService from '../../../../../modules/venue/services/deleteVenueService';

export default class VenueController {

    async index(req: Request, res: Response, next: NextFunction) {
        const listVenueService = container.resolve(ListVenueService)
        const venues = await listVenueService.execute()

        return res.status(200).json(venues);
    }

    async create(req: Request, res: Response, next: NextFunction) {
        const createVenueService = container.resolve(CreateVenueService)
        const venue = await createVenueService.execute(req.body)

        return res.status(201).json(venue);

    }

    async update(req: Request, res: Response, next: NextFunction) {
        const updateVenueService = container.resolve(UpdateVenueService)
        const venue = await updateVenueService.execute(req.body)

        return res.status(200).json(venue);

    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const deleteVenueService = container.resolve(DeleteVenueService)
        const venue = await deleteVenueService.execute(req.params.id)

        return res.status(200).json(venue);

    }
}