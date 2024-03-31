import { useState } from 'react'
import Form from '../components/Form'

const initialState = {
	username: '',
	email: '',
	password: '',
}

const SignUp = () => {
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
		if (!data.username.trim()) {
			errors.username = 'Username is required'
		}
		if (!data.email.trim()) {
			errors.email = 'Email is required'
		} else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
			errors.email = 'Invalid email format'
		}
		if (!data.password.trim()) {
			errors.password = 'Password is required'
		} else if (data.password.length < 6) {
			errors.password = 'Password must be at least 6 characters long'
		}
		return errors
	}
	return (
		<div className="flex items-center justify-center w-full my-10 mt-36 mb-40">
			<Form heading="Join Us Now!" onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
						Username
					</label>
					<input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className={`shadow-sm rounded-md w-full px-3 py-2 border  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  ${errors.username ? 'border-red-500' : 'border-gray-300'} `} placeholder="username" required />
					<p className="text-red-500 text-xs italic h-3">{errors.username}</p>
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
						Email Address
					</label>
					<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`shadow-sm rounded-md w-full px-3 py-2 border  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  ${errors.email ? 'border-red-500' : 'border-gray-300'} `} placeholder="your@email.com" required />
					<p className="text-red-500 text-xs italic h-3">{errors.email}</p>
				</div>
				<div className="mb-4">
					<label htmlFor="password" className="block text-sm font-medium text-gray-700  mb-2">
						Password
					</label>
					<input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
					<p className="text-red-500 text-xs italic h-3">{errors.password}</p>
				</div>
				<div className="flex items-center justify-end mb-4">
					<a href="/login" className="text-xs text-red-500 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Already have an account?
					</a>
				</div>
				<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					SUBMIT
				</button>
			</Form>
		</div>
	)
}

export default SignUp
