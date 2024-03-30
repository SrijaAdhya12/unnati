import { Routes, Route, useLocation } from 'react-router-dom'
import { Articles, CheatSheets, Donations, Events, Home, JobPostings, Login, Profile, SignUp } from '../pages'

const AppRouter = () => {
	const location = useLocation()
	return (
		<Routes {...location}>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/events" element={<Events />} />
			<Route path="/cheatsheets" element={<CheatSheets />} />
			<Route path="/donations" element={<Donations />} />
			<Route path="/jobpostings" element={<JobPostings />} />
			<Route path="/articles" element={<Articles />} />
		</Routes>
	)
}

export default AppRouter
