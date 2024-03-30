import { Carousel } from "../components"

const Testimonials = () => {
	return (
		<section id="testimonials" className="container mx-auto mt-32 px-32">
			<div>
			<div>
				<h1 className="font-roboto text-4xl font-bold mb-10">Testimonials</h1>
			</div>
				<div>
					<Carousel/>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
