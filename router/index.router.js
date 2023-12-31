import express from 'express';
import userRouter from './users.router.js'
import cityRouter from './city.router.js'
import itineraryRouter from './itinerary.router.js'

const router= express.Router();

router.get('/',(req,res)=>{

    res.send('Hello')
});

router.use('/users', userRouter);
router.use('/cities', cityRouter);
router.use('/itineraries', itineraryRouter);

export default router;