import DonateImg from '../assets/donate.png'

const Donate = () => {
	return (
		<section id="donate" className="container mx-auto mt-32 px-32 py-10">
			<div className="flex items-center text-balance">
				<div>
					<h1 className="font-roboto text-4xl font-bold mb-10">Donate</h1>
					<p className="text-lg tracking-wide">Empower women through your donations for education and healthcare development. Your contributions make a direct impact on providing access to quality education and essential healthcare, fostering their empowerment and well-being.</p>
					<a href="/donations">
						<button className="bg-red-600 rounded-lg px-5 h-11 text-white mt-10">Donate Now</button>
					</a>
				</div>
				<img src={DonateImg} alt="donate" />
			</div>
		</section>
	)
}

export default Donate
