import { Hero, Features, Donate, Testimonials } from '../sections'

const Home = () => {
	return (
		<main>
			<div className="bg-red-100">
				<Hero />
			</div>
			<Features />
			<Donate />
			<Testimonials />
		</main>
	)
}

export default Home
