import React from 'react'

const Navbar = () => {
  return (
		<div className="container mx-[400px]">
			<div className="my-[50px] font-roboto flex space-x-[600px]">
				<h5 className="text-black font-extrabold text-3xl">Unnati</h5>
				<div className='flex space-x-28'>
					<h6>Features</h6>
					<h6>Donate</h6>
					<h6>Sign up</h6>
				</div>
			</div>
		</div>
	);
}

export default Navbar