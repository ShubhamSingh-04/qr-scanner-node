import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const BreakFastDay2 = sequelize.define('breakfast_day2', {
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
  breakfast_status: {
    type: DataTypes.ENUM('Done', 'Pending'),
    allowNull: false,
    defaultValue: 'Pending',
  },
  breakfast_time: {
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
  tableName: 'breakfast_day2', // Ensure correct mapping
  timestamps: false,           // Optional: skip Sequelize's `createdAt`, `updatedAt`
});

export default BreakFastDay2;