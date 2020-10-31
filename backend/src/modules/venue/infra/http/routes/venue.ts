import { Router } from 'express'
import VenueController from '../controllers/venueController'

const venuesRouter = Router()
const venueController = new VenueController()

venuesRouter.get('/', venueController.index)
venuesRouter.post('/', venueController.create)
venuesRouter.put('/', venueController.update)
venuesRouter.delete('/:id', venueController.delete)

export default venuesRouter
