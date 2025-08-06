import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const LunchDay1 = sequelize.define('lunch_day1', {
  member_unique_code: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  member_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  lunch_status: {
    type: DataTypes.ENUM('Done', 'Pending'),
    allowNull: false,
    defaultValue: 'Pending'
  },
  lunch_time: {
    type: DataTypes.DATE,
    allowNull: true
  },
  team_unique_code: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  indexes: [
    {
      name: 'idx_lunch_day1_team_unique_code',
      fields: ['team_unique_code']
    }
  ],
  tableName: 'lunch_day1',
  timestamps: false
});

// 🧩 Setup foreign key association
import TeamData from './TeamData.model.js'; // Assume this model exists and matches `team_data`

LunchDay1.belongsTo(TeamData, {
  foreignKey: 'team_unique_code',
  targetKey: 'team_unique_code',
  onDelete: 'CASCADE',
  as: 'team'
});

export default LunchDay1;
