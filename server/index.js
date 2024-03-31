import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { authRoutes, eventRoutes, userRoutes } from './routes/index.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT
app.use(cors()) // Enable CORS for all routes

app.get('/', (_, res) => res.send('Hello from unnati server'))
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/events', eventRoutes)

mongoose
	.connect(process.env.CONNECTION_URL)
	.then(console.log('Connected to MongoDB Database 🌐'))
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} 🚀`)))
	.catch((error) => console.log(error.message))

export default app
