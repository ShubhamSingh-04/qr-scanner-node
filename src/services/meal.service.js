// services/meal.service.js
import DinnerDay1 from '../models/DinnerDay1.model.js';
// services/meal.service.js
import LunchDay1 from '../models/LunchDay1.model.js';
// services/meal.service.js
import BreakfastDay2 from '../models/BreakfastDay2.model.js';

import getIndianTime from '../utils/currentIndianTime.js';


export const markDinnerDay1Done = async (memberUniqueCode) => {
  const member = await DinnerDay1.findByPk(memberUniqueCode);

  if (!member) {
    const error = new Error('Member not found');
    error.statusCode = 404;
    error.data = { unique_code: memberUniqueCode };
    throw error;
  }

  if (member.dinner_status === 'Done') {
    const error = new Error("Already 'Done'");
    error.statusCode = 400;
    error.data = {
      unique_code: member.member_unique_code,
      name: member.member_name.split(' ')[0],
    };
    throw error;
  }

  member.dinner_status = 'Done';

  member.dinner_time = getIndianTime();
  await member.save();

  return {
    unique_code: member.member_unique_code,
    name: member.member_name.split(' ')[0],
  };
};



export const markLunchDay1Done = async (memberUniqueCode) => {
  const member = await LunchDay1.findByPk(memberUniqueCode);

  if (!member) {
    const error = new Error('Member not found');
    error.statusCode = 404;
    error.data = { unique_code: memberUniqueCode };
    throw error;
  }

  if (member.lunch_status === 'Done') {
    const error = new Error("Already 'Done'");
    error.statusCode = 400;
    error.data = {
      unique_code: member.member_unique_code,
      name: member.member_name.split(' ')[0],
    };
    throw error;
  }

  member.lunch_status = 'Done';
  member.lunch_time = getIndianTime();
  await member.save();

  return {
    unique_code: member.member_unique_code,
    name: member.member_name.split(' ')[0],
  };
};



export const markBreakfastDay2Done = async (memberUniqueCode) => {
  const member = await BreakfastDay2.findByPk(memberUniqueCode);

  if (!member) {
    const error = new Error('Member not found');
    error.statusCode = 404;
    error.data = { unique_code: memberUniqueCode };
    throw error;
  }

  if (member.breakfast_status === 'Done') {
    const error = new Error("Already 'Done'");
    error.statusCode = 400;
    error.data = {
      unique_code: member.member_unique_code,
      name: member.member_name.split(' ')[0],
    };
    throw error;
  }

  member.breakfast_status = 'Done';
  member.breakfast_time = getIndianTime();
  await member.save();

  return {
    unique_code: member.member_unique_code,
    name: member.member_name.split(' ')[0],
  };
};

