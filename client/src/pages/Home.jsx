import HeroImg from '../assets/hero.png'

const Home = () => {
    return (
		<main className="mx-[400px] pb-[20px]">
			<section className="text-black font-roboto my-[100px] flex space-x-[190px]">
				<div className="my-[80px]">
					<h6 className="font-bold text-[65px]">Unnati</h6>
					<br />
					<h6 className="text-[40px] font-regular">-Rise, Empower, Thrive</h6>
				</div>
				<div className="mb-[-75px]">
					<img src={HeroImg} alt="" />
				</div>
			</section>
		</main>
	)
}

export default Home