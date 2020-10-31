import { Router } from 'express'
import venuesRouter from '../../../../modules/venue/infra/http/routes/venue'

const router = Router()

router.use('/venues', venuesRouter);

export default router;