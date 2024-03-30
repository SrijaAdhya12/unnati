import './App.css'
import { AppRouter, Footer, Navbar } from './components/'
import { Home } from './pages/'

const App = () => {
	return (
		<>
			<Navbar />
			<AppRouter />
			<Footer />
		</>
	)
}

export default App
