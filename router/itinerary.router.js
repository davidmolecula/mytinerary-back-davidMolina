import express from 'express';
import ItineraryController from '../controllers/itinerary.controller.js'

const router= express.Router();
const {getItineraries, createItinerary, getItineraryById, updateItinerary, deleteItinerary}=ItineraryController

router.get('/', getItineraries)
router.get('/:id', getItineraryById)
router.put('/:id', updateItinerary)
router.post('/', createItinerary)
router.delete('/:id', deleteItinerary)


export default router;