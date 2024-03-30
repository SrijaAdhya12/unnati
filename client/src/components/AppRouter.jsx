import { Routes, Route, useLocation } from 'react-router-dom'
import { Events, Home, Login, Profile, SignUp } from '../pages'
// import { Contributors, Feedback, Home, RateUs } from '../pages'

const AppRouter = () => {
	const location = useLocation()
	return (
		<Routes {...location}>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/events" element={<Events />} />
		</Routes>
	)
}

export default AppRouter
