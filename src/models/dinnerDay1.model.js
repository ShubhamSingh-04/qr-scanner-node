import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import TeamData from './TeamData.model.js'; // Assumes model is defined

const DinnerDay1 = sequelize.define('DinnerDay1', {
  member_unique_code: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    allowNull: false,
  },
  member_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  dinner_status: {
    type: DataTypes.ENUM('Done', 'Pending'),
    allowNull: false,
    defaultValue: 'Pending',
  },
  dinner_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  team_unique_code: {
    type: DataTypes.STRING(50),
    allowNull: false,
    references: {
      model: TeamData,
      key: 'team_unique_code',
    },
    onDelete: 'CASCADE',
  }
}, {
  tableName: 'dinner_day1',
  timestamps: false,
});

export default DinnerDay1;
