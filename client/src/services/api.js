import axios from 'axios'

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL })

export const serverOk = async () => {
	try {
		const response = await api.get('/')

		return response.data
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
export const fetchData = async () => {
	try {
		const response = await api.get('/data')

		return response.data
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
