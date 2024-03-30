import express from 'express'
import { getAllEvents, getHackathons, getWorkshops, getMeetups, createEvent, updateEvent } from '../controllers/event.js'

const router = express.Router()

// Route to get all events
router.get('/', getAllEvents)
router.get('/hackathons', getHackathons)
router.get('/workshops', getWorkshops)
router.get('/meetups', getMeetups)
router.post('/', createEvent)
router.put('/:id', updateEvent)


export default router
