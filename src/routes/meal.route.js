// routes/meal.route.js
import express from 'express';
import {
  handleDinnerDay1,
  handleLunchDay1,
  handleBreakfastDay2
} from '../controllers/meal.controller.js';

const router = express.Router();

// PATCH routes for marking meals as Done
router.patch('/dinner-day1/markDone/:memberUniqueCode', handleDinnerDay1);
router.patch('/lunch-day1/markDone/:memberUniqueCode', handleLunchDay1);
router.patch('/breakfast-day2/markDone/:memberUniqueCode', handleBreakfastDay2);

export default router;
