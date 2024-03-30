import React from 'react'

const Navbar = () => {
	return (
		<div className="container mx-[400px]">
			<div className="my-[60px] font-roboto flex space-x-[600px]">
				<h5 className="text-black font-extrabold text-3xl">Unnati</h5>
				<div className="flex space-x-20">
					<a href="">
						<h6>Features</h6>
					</a>
					<a href="">
						<h6>Donate</h6>
					</a>
					<a href="">
						<h6>Sign up</h6>
					</a>
					<a href="">
						<h6>Profile</h6>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar
