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
	const handleSubmit = () => {}
	return (
		<div class="min-h-screen flex items-center justify-center w-full ">
			<Form heading="Join Us Now!" onSubmit={handleSubmit}>
				<div class="mb-4">
					<label for="username" class="block text-sm font-medium text-gray-700 mb-2">
						Username
					</label>
					<input type="text" id="username" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
				</div>
				<div class="mb-4">
					<label for="password" class="block text-sm font-medium text-gray-700  mb-2">
						Password
					</label>
					<input type="password" id="password" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />

					<a href="/" class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Forgot Password?
					</a>
				</div>
				<div class="flex items-center justify-between mb-4">
					<div class="flex items-center">
						<input type="checkbox" id="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked />
						<label for="remember" class="ml-2 block text-sm text-gray-700 ">
							Remember me
						</label>
					</div>
					<a href="/signup" class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Create Account
					</a>
				</div>
			</Form>
		</div>
	)
}

export default SignUp
