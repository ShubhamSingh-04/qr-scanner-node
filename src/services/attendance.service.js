import MemberAttendance from '../models/MemberAttendance.model.js';
import logger from '../utils/logger.util.js';
import getRelativePath from '../utils/getRelativeFilePath.util.js';

import getIndianTime from '../utils/currentIndianTime.js';

const thisFilePath = getRelativePath(import.meta.url); // Path to this file

export const markAttendanceDone = async (memberUniqueCode) => {
  const member = await MemberAttendance.findByPk(memberUniqueCode);

  logger.info(`Member: ${member}`, thisFilePath + '\\markAttendanceDone')

  // Handle: member not found
  if (!member) {
    const error = new Error(`Member with unique code "${memberUniqueCode}" not found`);
    error.statusCode = 404;
    throw error;
  }

  // Handle: already marked
  if (member.attendance_status === 'Present') {
    const firstName = member.member_name.split(' ')[0];
    const error = new Error(`Already 'Done'`);
    error.statusCode = 400;
    error.meta = {
      member_unique_code: member.member_unique_code,
      member_name: firstName
    };
    throw error;
  }

  // Update attendance
  member.attendance_status = 'Present';
  member.attendance_time = getIndianTime()

  await member.save();

  const firstName = member.member_name.split(' ')[0];

  return {
    member_unique_code: member.member_unique_code,
    member_name: firstName
  };
};
