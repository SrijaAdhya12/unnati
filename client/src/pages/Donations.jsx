import { useState } from 'react'
import DonationImg from '../assets/donation.png'
import { Form } from '../components'

const initialState = {
	name: '',
	email: '',
	amount: '',
}

const Donations = () => {
	const [formData, setFormData] = useState(initialState)
	const [errors, setErrors] = useState({})
	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevState) => ({ ...prevState, [name]: value }))
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		// Perform form validation
		const validationErrors = validateForm(formData)
		if (Object.keys(validationErrors).length === 0) {
			// Form is valid, submit data or perform other actions
			console.log(formData)
		} else {
			// Form is invalid, set validation errors
			setErrors(validationErrors)
		}
	}
	const validateForm = (data) => {
		let errors = {}
		if (!data.name.trim()) {
			errors.name = 'Name is required'
		}
		if (!data.email.trim()) {
			errors.email = 'Email is required'
		} else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
			errors.email = 'Invalid email format'
		}
		if (!data.amount.trim()) {
			errors.amount = 'Amount is required'
		} else if (data.password.length < 2) {
			errors.amount = 'Please donate an amount more thab 10$'
		}
		return errors
	}
	return (
		<main className="container mx-auto grid grid-cols-2 px-40 gap-44 mb-16">
			<div className="my-20">
				<h1 className="font-bold text-4xl">Donation</h1>
				<h3 className="text-lg mt-6">Empower women through your donations for education and healthcare development.</h3>
				<div className="flex items-center w-full mt-16">
					<Form heading="Help Us!" onSubmit={handleSubmit}>
						<div className="mb-4">
							<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
								Name
							</label>
							<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`shadow-sm rounded-md w-full px-3 py-2 border  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  ${errors.name ? 'border-red-500' : 'border-gray-300'} `} placeholder="name" required />
							<p className="text-red-500 text-xs italic h-3">{errors.name}</p>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
								Email Address
							</label>
							<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`shadow-sm rounded-md w-full px-3 py-2 border  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  ${errors.email ? 'border-red-500' : 'border-gray-300'} `} placeholder="your@email.com" required />
							<p className="text-red-500 text-xs italic h-3">{errors.email}</p>
						</div>
						<div className="mb-4">
							<label htmlFor="amount" className="block text-sm font-medium text-gray-700  mb-2">
								Amount
							</label>
							<input type="amount" id="amount" name="amount" value={formData.amount} onChange={handleChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="$100" required />
							<p className="text-red-500 text-xs italic h-3">{errors.amount}</p>
						</div>
						<div className="flex items-center justify-end mb-4">
							<p className="text-xs text-slate-400 font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*Select Payment Method</p>
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
