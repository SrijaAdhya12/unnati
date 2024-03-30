import Event from '../models/event.js'

// Get all events
export const getAllEvents = async (req, res) => {
	try {
		const events = await Event.find()
		res.json(events)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// Get hackathons
export const getHackathons = async (req, res) => {
	try {
		const hackathons = await Event.find({ type: 'hackathon' })
		res.json(hackathons)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// Get workshops
export const getWorkshops = async (req, res) => {
	try {
		const workshops = await Event.find({ type: 'workshop' })
		res.json(workshops)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// Get meetups
export const getMeetups = async (req, res) => {
	try {
		const meetups = await Event.find({ type: 'meetup' })
		res.json(meetups)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// Create a new event
export const createEvent = async (req, res) => {
    try {
        const eventData = req.body; // Assuming the request body contains event data
        const newEvent = new Event(eventData);
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update an existing event
export const updateEvent = async (req, res) => {
	const eventId = req.params.id
	const eventData = req.body

	try {
		const updatedEvent = await Event.findByIdAndUpdate(eventId, eventData, { new: true })
		if (!updatedEvent) {
			return res.status(404).json({ message: 'Event not found' })
		}
		res.json(updatedEvent)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}
