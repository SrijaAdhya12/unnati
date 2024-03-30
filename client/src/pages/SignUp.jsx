const SignUp = () => {
	return (
		<section id="features" className="container mx-auto mt-32 p-3 max-w-xl bg-blue-200 rounded-sm">
			<div className="text-red-600 z-50 text-center">Sign Up</div>
			<form action="" className="flex flex-col gap-3">
				<div className="flex flex-col">
					<label htmlFor="name">Name:</label>
					<input type="text" placeholder="Name" className="border border-red-100 px-4" id="name" />
				</div>
				<div className="flex flex-col">
					<label htmlFor="name">Name:</label>
					<input type="text" placeholder="Name" className="border border-red-100 px-4" id="name" />
				</div>
				<div className="flex flex-col">
					<label htmlFor="name">Name:</label>
					<input type="text" placeholder="Name" className="border border-red-100 px-4" id="name" />
				</div>
				<div className="flex flex-col">
					<label htmlFor="name">Name:</label>
					<input type="text" placeholder="Name" className="border border-red-100 px-4" id="name" />
				</div>
				<div className="flex flex-col">
					<label htmlFor="name">Name:</label>
					<input type="text" placeholder="Name" className="border border-red-100 px-4" id="name" />
				</div>
				<button type="submit" className="bg-red-600 px-4 rounded-sm">
					SUBMIT
				</button>
			</form>
		</section>
	)
}

export default SignUp
