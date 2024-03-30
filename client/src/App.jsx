import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
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

	return (
		<>
			<Navbar />
			<Home />
		</>
	)
}

export default App
