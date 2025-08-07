import { markAttendanceDone } from '../services/attendance.service.js';

export const markAttendance = async (req, res) => {
  const { member_unique_code } = req.params;

  try {
    const result = await markAttendanceDone(member_unique_code);

    return res.status(200).json({
      status: 'success',
      message: 'Attendance marked as Done',
      unique_code: result.member_unique_code,
      name: result.member_name,
    });

  } catch (error) {
    return res.status(error.statusCode || 500).json({
      status: 'error',
      message: error.message,
      unique_code: error.meta?.member_unique_code || member_unique_code,
      name: error.meta?.member_name || 'Unknown',
    });
  }
};
