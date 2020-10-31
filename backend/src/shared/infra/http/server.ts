import 'reflect-metadata'
import '../../../shared/container/index'
import express from 'express'
import router from './routes'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3003

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Backend is running on port: ${port}`)
})