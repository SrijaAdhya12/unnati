import HeroImg from '../assets/events-hero.png'

const EventsHero = () => {
	return (
		<section id="hero" className="container mx-auto grid grid-cols-2 px-40 gap-44 items-center">
			<div className="flex flex-col gap-10">
				<h1 className="font-bold text-5xl">Events</h1>
				<h3 className="text-xl mt-10">We have gathered together all the events that you can be a part of, where you can educate yourself, be inspired and inspire others, hang out and meet new people of similar interests! Which upcoming event you won’t miss?</h3>
				<button className="bg-red-600 px-10 rounded-lg p-2 w-fit h-11 text-white hover:bg-red-800">Host an Event</button>
			</div>
			<img src={HeroImg} alt="hero" />
		</section>
	)
}

export default EventsHero
