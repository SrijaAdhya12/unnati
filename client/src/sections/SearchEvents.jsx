import { faCartArrowDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchEvents = () => {
	return (
		<section id="search" className="container mx-auto px-40 my-10">
			<div className="grid grid-cols-3 max-w-4xl gap-5 items-end">
				<div>
					<h5 className="font-bold mb-2">Categories</h5>
					<select name="categories" id="categories" className="appearance-none rounded-full ring-1 py-2 w-full max-h-10 ring-gray-400 focus:ring-2 focus:ring-gray-600 px-5 pr-9">
						<option value="all">All</option>
						<option value="hackathons">Hackathons</option>
						<option value="meetups">Meetups</option>
						<option value="workshops">Workshops</option>
					</select>
				</div>
				<div>
					<h5 className="font-bold mb-2">Search</h5>
					<div className="relative flex items-center">
						<input type="text" className="ring-1 ring-gray-400 rounded-full w-full py-2 px-5 pr-10" placeholder="Hackathons" />
						<svg className="absolute right-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<FontAwesomeIcon icon={faSearch} />
						</svg>
					</div>
				</div>
				<button className="rounded-full ring-1 py-2 w-full max-h-10 ring-gray-400 focus:ring-2 hover:ring-red-600 focus:ring-gray-600">See past events</button>
			</div>
		</section>
	)
}

export default SearchEvents
