import mongoose, { Schema } from 'mongoose'

const defaultThumbnail = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sunday-church-event-flyer-template-design-081ae11404d6852da2285d03fc003d2a_screen.jpg?ts=1591260501'

const event = Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	date: { type: Date, required: true },
	time: { type: String },
	thumbnail: { type: String, default: defaultThumbnail },
	entryFee: { type: Number, default: 0 },
	location: { type: String, default: 'online' },
	organizer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	type: { type: String, enum: ['hackathon', 'workshop', 'meetup'], required: true },
})

export default mongoose.model('users', event)
