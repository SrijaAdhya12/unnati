import { EventCard as Card } from '../components'
import { events } from '../content'

const Events = () => {
	return (
		<div className="container mx-auto mt-20 px-32">
			<div className="flex justify-between items-center mb-16">
				<h1 className="font-roboto font-bold text-4xl">Events</h1>
				<button className="bg-red-600 px-4 rounded-lg p-2 w-32 h-11 text-white">Create Event</button>
			</div>
			<div className='grid grid-cols-3 mb-16'>
				{events.map((event) => (
					<Card {...event} key={event.id} />
				))}
			</div>
		</div>
	)
}

export default Events
