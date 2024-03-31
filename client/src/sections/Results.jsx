import { EventCard as Card } from '../components'

const Results = ({ events }) => {
	return (
		<section className="container mx-auto px-40">
			<div id="results" className="grid grid-cols-3 mb-16 gap-y-5">
				{events?.map((event) => (
					<Card {...event} key={event.id} />
				))}
			</div>
		</section>
	)
}
export default Results
