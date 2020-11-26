import { container } from 'tsyringe'
import { Request, Response } from 'express'
import UpdateVenueService from '../../../services/updateVenueService'
import CreateVenueService from '../../../services/createVenueService';
import ListVenueService from '../../../services/listVenueService'
import DeleteVenueService from '../../../services/deleteVenueService';

export default class VenueController {
  async index(req: Request, res: Response) {
    const listVenueService = container.resolve(ListVenueService)
    const venues = await listVenueService.execute()

    return res.status(200).json(venues);
  }

  async create(req: Request, res: Response) {
    const createVenueService = container.resolve(CreateVenueService)
    const venue = await createVenueService.execute(req.body)

    return res.status(201).json(venue);
  }

  async update(req: Request, res: Response) {
    const updateVenueService = container.resolve(UpdateVenueService)
    const venue = await updateVenueService.execute(req.body)

    return res.status(200).json(venue);
  }

  async delete(req: Request, res: Response) {
    const deleteVenueService = container.resolve(DeleteVenueService)
    const venue = await deleteVenueService.execute(req.params.id)

    return res.status(200).json(venue);
  }
}
