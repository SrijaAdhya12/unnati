import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
	return (
		<footer className="dark:bg-black p-10 font-roboto dark:text-white md:px-48 text-black bg-red-400 border-t" id="footer">
			<div className="w-full sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-10 grid">
				<div className="logo">
					<a className="text-3xl font-bold tracking-widest hover:text-gray-500" href="#">
						UNNATI
					</a>
					<p className="text-lg font-medium">A WOMEN EMPOWERMENT SITE</p>
				</div>
				<div className="logo flex flex-col gap-1 text-base ease-in-out">
					<h5 className="font-bold">LEGALS</h5>
					<a className="hover:font-semibold" href="/">
						LICENSE
					</a>
					<a className="hover:font-semibold" href="/">
						CODE OF CONDUCT
					</a>
					<a className="hover:font-semibold" href="" target="_blank">
						JOIN US
					</a>
					<a className="hover:font-semibold" href="/">
						KNOW MORE
					</a>
				</div>
				<div className="logo flex flex-col gap-1 text-base ease-in-out">
					<h5 className="font-bold">SERVICES</h5>
					<a className="hover:font-semibold" href="#Features">
						OUR FEATURES
					</a>
					<a className="hover:font-semibold" href="/">
						FEEDBACK
					</a>
					<a className="hover:font-semibold" href="/">
						RATE US
					</a>
					<a className="hover:font-semibold" href="/">
						MESSAGE US
					</a>
				</div>
				<div className="logo flex flex-col gap-1 text-base ease-in-out">
					<h5 className="font-bold">LINKS</h5>
					<a className="hover:font-semibold" href="#about-us">
						ABOUT US
					</a>
					<a className="hover:font-semibold" href="#contact-us">
						CONTACT US
					</a>
					<a className="hover:font-semibold" href="#testimonials">
						TESTIMONIALS
					</a>
				</div>
				<div className="logo flex flex-col gap-1 text-base ease-in-out">
					<h5 className="font-bold">LOCATION</h5>
					<a className="hover:font-semibold" href="" target="_blank">
						{' '}
						Unnati- Rise, Empower& Thrive
							<br/>
						Main Way, Kolkata, West Bengal{' '}
					</a>
					<a className="hover:font-semibold" href="tel:(555) 555-5555">
						(+91) 98315 34154
					</a>
					<a className="hover:font-semibold" href="mailto:inquiries@unnati.com">
						inquiries@unnati.com
					</a>
				</div>
			</div>

			<hr className="my-20 dark:border-white border-black" />

			<div className="flex justify-center gap-3 items-center">
				<a className="border border-black dark:border-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors ease-in-out" href="">
					<i className="fa-brands fa-x-twitter fa-xl"></i>
				</a>
				<a className="border border-black dark:border-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors ease-in-out" href="" target="_blank">
					<i className="fa-brands fa-github fa-xl"></i>
				</a>
				<a className="border border-black dark:border-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors ease-in-out" href="">
					<i className="fa-brands fa-linkedin-in fa-xl"></i>
				</a>
				<a className="border border-black dark:border-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors ease-in-out" href=""></a>
				<a className="border border-black dark:border-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors ease-in-out" href="">
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
		</footer>
	)
}

export default Footer
