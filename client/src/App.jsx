import { useEffect, useState } from 'react'
import './App.css'
import { fetchData } from './services/api'

const App = () => {
	const [welcomeText, setWelcomeText] = useState('Hello, World!')
	useEffect(() => {
		const getData = async () => {
			try {
				const responseData = await fetchData()
				setWelcomeText(JSON.stringify(responseData))
			} catch (error) {
				console.error('Error:', error)
			}
		}
		getData()
	}, [])

	return <h1 className="text-3xl font-bold underline">{welcomeText}</h1>
}

export default App
