const Navbar = () => {
	return (
		<div className="w-full bg-red-100">
			<div className="container px-5 py-16 mx-auto flex justify-between items-center">
				<h5 className="font-extrabold text-3xl">Unnati</h5>
				<div className="flex space-x-20">
					<a href="/#features">Features</a>
					<a href="/#donate">Donate</a>
					<a href="/#testimonials">Testimonials</a>
					<a href="/signup">Sign up</a>
					<a href="/profile">Profile
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar
