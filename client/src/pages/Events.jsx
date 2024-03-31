import { EventCard as Card } from '../components'
import { events } from '../content'
import { EventsHero, Results, SearchEvents } from '../sections'

const Events = () => {
	return (
		<main>
			<EventsHero />
			<SearchEvents />
			<Results />
		</main>
	)
}

export default Events
