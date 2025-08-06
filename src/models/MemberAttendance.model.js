import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const MemberAttendance = sequelize.define('member_attendance', {
  member_unique_code: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  member_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  attendance_status: {
    type: DataTypes.ENUM('Present', 'Absent'),
    allowNull: false,
    defaultValue: 'Absent',
  },
  attendance_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  team_unique_code: {
    type: DataTypes.STRING(50),
    allowNull: false,
    references: {
      model: 'team_data',
      key: 'team_unique_code',
    },
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'member_attendance',
  timestamps: false,
});

export default MemberAttendance;
