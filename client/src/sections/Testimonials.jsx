import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { testimonials } from '../content'
import { TestimonialCard } from '../components'

const Testimonials = () => {
	return (
		<section id="testimonials" className="container mx-auto mt-32 px-32">
			<h1 className="font-roboto text-4xl font-bold mb-10">Testimonials</h1>
			<Carousel showArrows={true}>
				{testimonials.map((testimony) => (
					<TestimonialCard key={testimony.id} {...testimony} />
				))}
			</Carousel>
		</section>
	)
}

export default Testimonials
