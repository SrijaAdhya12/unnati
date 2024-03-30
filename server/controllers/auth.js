import bcrypt from 'bcrypt'

export const SignUp = async (req, res) => {
	try {
		const { username, email, password } = req.body

		// Check if user with given email already exists
		let user = await User.findOne({ email })
		if (user) {
			return res.status(400).json({ message: 'User with this email already exists' })
		}

		// Hash the password
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		// Create a new user
		user = new User({
			username,
			email,
			password: hashedPassword,
		})

		// Save the user to the database
		await user.save()

		res.status(201).json({ message: 'User registered successfully' })
	} catch (err) {
		console.error(err.message)
		res.status(500).json({ message: 'Server Error' })
	}
}

export const SignIn = async (req, res) => {
	try {
		const { email, password } = req.body

		// Check if user with given email exists
		const user = await User.findOne({ email })
		if (!user) {
			return res.status(400).json({ message: 'Invalid credentials' })
		}

		// Compare passwords
		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) {
			return res.status(400).json({ message: 'Invalid credentials' })
		}

		res.json({ message: 'User signed in successfully' })
	} catch (err) {
		console.error(err.message)
		res.status(500).json({ message: 'Server Error' })
	}
}
