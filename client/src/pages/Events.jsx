import { EventsHero, Results, SearchEvents } from '../sections'
import { useEffect, useState } from 'react'
import { fetchEvents } from '../services/api'

const Events = () => {
	const [events, setEvents] = useState([])

	useEffect(() => {
		const getEvents = async () => {
			try {
				const response = await fetchEvents()
				setEvents(response)
			} catch (error) {
				console.error(error)
			}
		}

		getEvents()
	}, [])
	return (
		<main>
			<EventsHero />
			<SearchEvents />
			<Results {...events} />
		</main>
	)
}

export default Events
