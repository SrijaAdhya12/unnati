import HeroImg from '../assets/hero.png'

const Hero = () => {
	return (
		<section id="hero" className="container mx-auto grid grid-cols-2 px-40 gap-44 bg-red-100">
			<div className="my-20">
				<h1 className="font-bold text-6xl">Unnati</h1>
				<h3 className="text-4xl mt-10"> - Rise, Empower, Thrive</h3>
			</div>
			<div className="">
				<img src={HeroImg} alt="hero" />
			</div>
		</section>
	)
}

export default Hero
