import { Router } from 'express'
import usersRouter from '@modules/user/infra/http/routes/user';
import venuesRouter from '@modules/venue/infra/http/routes/venue'

const router = Router()

router.use('/venues', venuesRouter)
router.use('/users', usersRouter)

export default router
