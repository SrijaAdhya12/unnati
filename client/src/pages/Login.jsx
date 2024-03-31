import Form from '../components/Form'

const Login = () => {
	const handleSubmit = () => {}
	return (
		<div class="min-h-screen flex items-center justify-center w-full ">
			<Form heading="Welcome Back!" onSubmit={handleSubmit}>
				<div class="mb-4">
					<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
						Email Address
					</label>
					<input type="email" id="email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
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
export default Login
