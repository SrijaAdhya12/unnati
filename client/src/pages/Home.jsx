import { Hero, Features, Donate, Testimonials } from '../sections'

const Home = () => {
	return (
		<main>
			<div className="bg-red-100">
				<Hero />
			</div>
			<Features />
			<div className="bg-red-100">
				<Donate />
			</div>
			<Testimonials />
		</main>
	)
}

export default Home
