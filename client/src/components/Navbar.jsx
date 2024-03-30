const Navbar = () => {
	return (
		<header className="w-full bg-red-100 md:w-screen md:px-20 sticky top-0">
			<div className="container px-5 py-10 mx-auto flex justify-between items-center">
				<img src="./logo.png" alt="" srcset="" width={200} />
				<div className="flex space-x-20">
					<a href="/#features">Features</a>
					<a href="/#donate">Donate</a>
					<a href="/#testimonials">Testimonials</a>
					<a href="/signup">Sign up</a>
					<a href="/profile">Profile</a>
				</div>
			</div>
		</header>
	)
}

export default Navbar
