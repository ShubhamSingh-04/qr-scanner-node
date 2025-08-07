import {
  markDinnerDay1Done,
  markLunchDay1Done,
  markBreakfastDay2Done
} from '../services/meal.service.js';

export const handleDinnerDay1 = async (req, res) => {
  const { memberUniqueCode } = req.params;

  try {
    const result = await markDinnerDay1Done(memberUniqueCode);
    return res.status(200).json({
      message: 'Dinner Day 1 marked as Done',
      ...result
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      ...err.data
    });
  }
};

export const handleLunchDay1 = async (req, res) => {
  const { memberUniqueCode } = req.params;

  try {
    const result = await markLunchDay1Done(memberUniqueCode);
    return res.status(200).json({
      message: 'Lunch Day 1 marked as Done',
      ...result
    });
  } catch (err) {
    
    return res.status(err.statusCode || 500).json({
      message: err.message,
      ...err.data
    });
  }
};

export const handleBreakfastDay2 = async (req, res) => {
  const { memberUniqueCode } = req.params;

  try {
    const result = await markBreakfastDay2Done(memberUniqueCode);
    return res.status(200).json({
      message: 'Breakfast Day 2 marked as Done',
      ...result
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      ...err.data
    });
  }
};
