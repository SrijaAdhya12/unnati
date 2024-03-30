import './App.css'
// import Navbar from './components/Navbar'
import { Navbar } from './components/'
import { Home } from './pages/'
import { useEffect, useState } from 'react'
import { fetchData } from './services/api'
import Features from './components/Features'

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
			<Features/>
		</>
	)
}

export default App
