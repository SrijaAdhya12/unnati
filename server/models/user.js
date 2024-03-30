import mongoose, { Schema } from 'mongoose'

const user = Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: String,
	image: String,
})

export default mongoose.model('users', user)
