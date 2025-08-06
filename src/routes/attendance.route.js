import express from 'express';
import { markAttendance } from '../controllers/attendance.controller.js';

const router = express.Router();

// PATCH /api/attendance/markPresent/:member_unique_code
router.patch('/markPresent/:member_unique_code', markAttendance);

export default router;
