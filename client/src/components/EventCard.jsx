const EventCard = ({id,title,description,date,time,entryFee,location,organizer,type}) => {
	return (
		<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
			<img className="h-42 w-96" src="https://miro.medium.com/v2/resize:fit:9216/1*NqdwB--128xNFXEyCRrkoQ.jpeg" alt="" />
			<a href="#">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center mt-5">{title}</h5>
			</a>
			<p className="mb-3 font-normal text-gray-700">{description}</p>
			<p className="mb-3 font-normal text-gray-700">{"date"}</p>
			<p className="mb-3 font-normal text-gray-700">{time}</p>
			<p className="mb-3 font-normal text-gray-700">{entryFee}</p>
			<p className="mb-3 font-normal text-gray-700">{location}</p>
			<p className="mb-3 font-normal text-gray-700">{organizer}</p>
			<p className="mb-3 font-normal text-gray-700">{type}</p>
			<a href={`/events/:${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300">
				Join
				<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
				</svg>
			</a>
		</div>
	)
}

export default EventCard
