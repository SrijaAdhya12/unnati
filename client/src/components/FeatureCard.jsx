import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FeatureCard = ({ title, description, link }) => {
	return (
		<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-end">
			<a href="#">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
			</a>
			<p className="mb-3 font-normal text-gray-700">{description}</p>
			<a href={`${link}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 gap-2 w-fit">
				Know More

				<FontAwesomeIcon icon={faArrowRight} />
			</a>
		</div>
	)
}

export default FeatureCard
