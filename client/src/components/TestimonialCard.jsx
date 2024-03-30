const TestimonialCard = ({ name, image, testimony }) => {
	return (
		<div className="relative group">
			<img src={image} className="z-10" />
			<div className="absolute z-40 bottom-0 overlay hidden group-hover:block bg-black bg-opacity-50 p-4 text-white w-full py-10">
				<h1 className="text-2xl font-bold">{name}</h1>
				<p>"{testimony}"</p>
			</div>
		</div>
	)
}

export default TestimonialCard
