import 'reflect-metadata'
import 'express-async-errors'
import '@shared/container/index'
import express, { Request, Response, NextFunction } from 'express'
import router from './routes'
import cors from 'cors'
import AppError from '@shared/errors/appError'

const app = express()
const port = process.env.PORT || 3003

app.use(cors())
app.use(express.json())
app.use(router)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })
    }

    console.error(error)
    return res.status(500).json({ message: 'Unknown error!' })
})

app.listen(port, () => {
    console.log(`Backend is running on port: ${port}`)
})