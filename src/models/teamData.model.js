import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const TeamData = sequelize.define('TeamData', {
  team_number: { type: DataTypes.INTEGER, allowNull: false },
  team_code: { type: DataTypes.STRING(20), allowNull: false },
  team_name: { type: DataTypes.STRING(100), allowNull: false },
  team_unique_code: {
    type: DataTypes.STRING(50),
    allowNull: false,
    primaryKey: true, // Correct primary key
  },

  // Leader
  leader_college: { type: DataTypes.STRING(150), allowNull: true },
  leader_name: { type: DataTypes.STRING(100), allowNull: false },
  leader_unique_code: { type: DataTypes.STRING(50), allowNull: false },
  leader_usn: { type: DataTypes.STRING(20), allowNull: false },
  leader_phone: { type: DataTypes.STRING(15), allowNull: false },
  leader_email: { type: DataTypes.STRING(100), allowNull: true },

  // Member 2
  member2_name: { type: DataTypes.STRING(100), allowNull: false },
  member2_unique_code: { type: DataTypes.STRING(50), allowNull: false },
  member2_usn: { type: DataTypes.STRING(20), allowNull: false },
  member2_phone: { type: DataTypes.STRING(15), allowNull: false },
  member2_email: { type: DataTypes.STRING(100), allowNull: true },

  // Member 3 (Optional)
  member3_name: { type: DataTypes.STRING(100), allowNull: true },
  member3_unique_code: { type: DataTypes.STRING(50), allowNull: true },
  member3_usn: { type: DataTypes.STRING(20), allowNull: true },
  member3_phone: { type: DataTypes.STRING(15), allowNull: true },
  member3_email: { type: DataTypes.STRING(100), allowNull: true },

  // Member 4 (Optional)
  member4_name: { type: DataTypes.STRING(100), allowNull: true },
  member4_unique_code: { type: DataTypes.STRING(50), allowNull: true },
  member4_usn: { type: DataTypes.STRING(20), allowNull: true },
  member4_phone: { type: DataTypes.STRING(15), allowNull: true },
  member4_email: { type: DataTypes.STRING(100), allowNull: true },
}, {
  tableName: 'team_data',
  timestamps: false
});

export default TeamData;
