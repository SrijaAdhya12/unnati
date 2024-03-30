import './App.css'
import { Navbar } from './components/'
import { Home } from './pages/'
import { useEffect, useState } from 'react'
import { fetchData } from './services/api'
import Features from './components/Features'
import Donation from './components/Donation'

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
			<div className="bg-red-100 pt-5">
				<Navbar />
				<Home />
			</div>
			<Features />
			<div className="bg-red-100 pt-5">
				<Donation/>
			</div>
		</>
	)
}

export default App
