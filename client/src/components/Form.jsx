import Button from './Button'

const Form = ({ children, heading, ...others }) => {
	return (
		<div class="bg-white shadow-md rounded-lg px-8 py-6 max-w-md ring-1 ring-gray-300">
			<h2 class="text-2xl font-bold text-center mb-4 ">{heading}</h2>
			<form {...others}>
				{children}
				<Button type="submit">SUBMIT</Button>
			</form>
		</div>
	)
}

export default Form
