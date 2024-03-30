import { FeatureCard as Card } from '../components'
import { features } from '../content'

const Features = () => {
	return (
		<section id="features" className="container mx-auto mt-32 px-32">
			<div className="font-roboto text-4xl font-bold pb-16">Features</div>
			<div className="flex space-x-16">
				{features.map((feature) => (
					<Card {...feature} key={feature.id} />
				))}
			</div>
		</section>
	)
}

export default Features
