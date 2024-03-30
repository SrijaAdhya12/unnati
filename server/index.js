import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors()) // Enable CORS for all routes

app.get('/', (_, res) => res.send('Hello from unnati server'))

app.get('/data', (req, res) => {
	const data = [
		{ id: 1, name: 'Item 1' },
		{ id: 2, name: 'Item 2' },
		{ id: 3, name: 'Item 3' },
	]

	res.json(data) // Send JSON response
})

app.listen(PORT, () => console.log(`Server🚀 running on port ${PORT}`))
