import { EventsHero, Results, SearchEvents } from '../sections'
import { useEffect, useState } from 'react'
import { fetchEvents } from '../services/api'

const Events = () => {
	const [events, setEvents] = useState([])
	const [category, setCategory] = useState('all')

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
	}, [category])
	return (
		<main>
			<EventsHero />
			<SearchEvents setCategory={setCategory} />
			<Results events={events} category={category} />
		</main>
	)
}

export default Events
