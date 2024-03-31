import DonationImg from '../assets/donation.png'
import { Form } from '../components'
const initialState = {
	username: '',
	email: '',
	password: '',
}

const Donations = () => {
	return (
		<main className="container mx-auto grid grid-cols-2 px-40 gap-44 mb-16">
			<div className="my-20">
				<h1 className="font-bold text-4xl">Donation</h1>
				<h3 className="text-lg mt-6">Empower women through your donations for education and healthcare development.</h3>
				<div className="flex items-center w-full mt-16">
					<Form heading="Help Us!" onSubmit={'handleSubmit'}>
						<div className="mb-4">
							<label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
								Name
							</label>
							<input type="text" id="username" name="username" value={'formData.username'} onChange={'handleChange'} className={`shadow-sm rounded-md w-full px-3 py-2 border  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  ${'errors.username' ? 'border-red-500' : 'border-gray-300'} `} placeholder="username" required />
							<p className="text-red-500 text-xs italic h-3">{'errors.username'}</p>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
								Email Address
							</label>
							<input type="email" id="email" name="email" value={'formData.email'} onChange={'handleChange'} className={`shadow-sm rounded-md w-full px-3 py-2 border  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  ${'errors.email' ? 'border-red-500' : 'border-gray-300'} `} placeholder="your@email.com" required />
							<p className="text-red-500 text-xs italic h-3">{'errors.email'}</p>
						</div>
						<div className="mb-4">
							<label htmlFor="password" className="block text-sm font-medium text-gray-700  mb-2">
								Amount
							</label>
							<input type="password" id="password" name="password" value={'formData.password'} onChange={'handleChange'} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
							<p className="text-red-500 text-xs italic h-3">{'errors.password'}</p>
						</div>
						<div className="flex items-center justify-end mb-4">
							<a href="/login" className="text-xs text-black hover:text-slate-400 font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								*Select Payment Method
							</a>
						</div>
						<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							PAY
						</button>
					</Form>
				</div>
			</div>
			<div className="mt-40">
				<img src={DonationImg} alt="hero" />
			</div>
		</main>
	)
}

export default Donations
