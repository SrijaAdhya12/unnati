import { faArrowRight, faLocation, faLocationPin, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EventCard = ({ id, title, description, date, time, entryFee, location, organizer, type, thumbnail }) => {
	const color = {
		hackathon: 'green-500',
		meetup: 'blue-500',
		workshop: 'red-500',
	}
	return (
		<div className="max-w-sm bg-white border  rounded-xl shadow">
			<img className="h-42 w-96 ring-1 rounded-t-xl" src={thumbnail} alt="thumbnail" />
			<div className="p-5">
				<div className="flex justify-between items-left flex-col w-full">
					<p className="uppercase font-bold text-left text-yellow-700">
						{'Mon, Oct 14'}@{time} IST
					</p>
					<div className="flex gap-2 justify-end">
						<FontAwesomeIcon icon={faLocationPin} className="text-2xl text-red-600" />
						{location}
					</div>
				</div>
				<div className="flex items-center justify-between my-5 flex-wrap text-black">
					<div>
						<h5 className={`text-2xl font-bold tracking-tight text-${color[type]}`}>{title}</h5>
						<h5 className={`text-xl tracking-tight`}>By {organizer}</h5>
					</div>
					<p className="text-gray-600 font-bold text-xl">{entryFee < 1 ? 'FREE' : `$ ${entryFee}`}</p>
				</div>

				<p className="mb-3 text-gray-600 font-bold">{description}</p>
				<div className="flex justify-between">
					<a href={`/events/:${id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
						Join
						<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
					</a>
					<button className="text-gray-500 hover:text-black">
						<FontAwesomeIcon icon={faShare} className="ml-2" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default EventCard
