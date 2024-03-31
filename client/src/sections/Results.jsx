import { EventCard as Card } from '../components'
import { events } from '../content'

const Results = () => {
	return (
		<section className="container mx-auto px-40">
			<section id="results" className="grid grid-cols-3 mb-16">
				{events.map((event) => (
					<Card {...event} key={event.id} />
				))}
			</section>
		</section>
	)
}
export default Results
