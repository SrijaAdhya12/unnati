import JobImg from '../assets/job.png'

const JobPostings = () => {
	return (
		<section className="container mx-auto grid grid-cols-2 px-40 gap-44 items-center mt-20 mb-16">
			<div>
				<div>
					<h1 className="font-bold text-5xl">Job Postings</h1>
					<h3 className="text-xl mt-10">Here you can check all the open job positions sorted especially for female candidates in one place.</h3>
				</div>
				<div>
					<img src={JobImg} alt="hero" />
				</div>
			</div>
		</section>
	)
}

export default JobPostings
