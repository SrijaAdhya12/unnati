const Form = ({ children, heading, ...others }) => {
	return (
		<div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md ring-1 ring-gray-300 w-[350px]">
			<h2 className="text-2xl font-bold text-center mb-4">{heading}</h2>
			<form {...others}>{children}</form>
		</div>
	)
}

export default Form
