import { useState } from 'react'
import Form from '../components/Form'

const initialState = {
	email: '',
	password: '',
	remember: false,
}

const Login = () => {
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
		<div className="flex items-center justify-center w-full mt-36 mb-48">
			<Form heading="Welcome Back!" onSubmit={handleSubmit}>
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
					<a href="/" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Forgot Password?
					</a>
				</div>
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center">
						<input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" defaultChecked={formData.remember} name="remember" value={formData.remember} />
						<label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
							Remember me
						</label>
					</div>
					<a href="/signup" className="text-xs text-red-500 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Create Account
					</a>
				</div>
				<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					SUBMIT
				</button>
			</Form>
		</div>
	)
}

export default Login
