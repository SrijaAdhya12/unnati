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
		<header className={`xl:w-full bg-red-100 md:px-20 sticky top-0 ${scrollingDown && 'shadow-lg'}`}>
			<div className="container px-5 py-3 mx-auto flex justify-between items-center">
				<a href="/">
					<img src="./logo.png" alt="logo" width={200} />
				</a>
				{inHome && (
					<div className="flex space-x-20">
						{navItems.map((item, index) => (
							<button key={index} onClick={() => smoothScrollTo(item.target)}>
								{item.label}
							</button>
						))}
						<a href="/signup">Sign up</a>
						<a href="/profile">Profile</a>
					</div>
				)}
			</div>
		</header>
	)
}

export default Navbar
