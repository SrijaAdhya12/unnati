import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
	const [scrollingDown, setScrollingDown] = useState(false)
	const location = useLocation()
	const inHome = location.pathname === '/'
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY

			// Determine if scrolling down
			setScrollingDown(scrollTop > (window.lastScrollTop || 0))
			window.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
		}

		// Listen for scroll events
		window.addEventListener('scroll', handleScroll)

		// Clean up event listener
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	const smoothScrollTo = (target) => document.querySelector(target).scrollIntoView({ behavior: 'smooth' })

	// Array of navigation items
	const navItems = [
		{ label: 'Features', target: '#features' },
		{ label: 'Donate', target: '#donate' },
		{ label: 'Testimonials', target: '#testimonials' },
	]

	return (
		<header className={`xl:w-full bg-red-100 md:px-20 sticky top-0 ${scrollingDown && 'shadow-lg'} z-50`}>
			<div className="container px-5 py-3 mx-auto flex justify-between items-center">
				<a href="/">
					<img src="./logo.png" alt="logo" width={200} />
				</a>
				{inHome && (
					<div className="flex gap-20 items-center">
						{navItems.map((item, index) => (
							<button key={index} onClick={() => smoothScrollTo(item.target)}>
								{item.label}
							</button>
						))}
						<a href="/signup">Sign up</a>
						<a href="/profile">
							<div className='rounded-full w-10 h-10 bg-white border-black border-2'>
								<img src="./" alt="" />
							</div>
						</a>
					</div>
				)}
			</div>
		</header>
	)
}

export default Navbar
