import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const LunchDay1 = sequelize.define('LunchDay1', {
  unique_code: { type: DataTypes.STRING(50), primaryKey: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  phone: { type: DataTypes.STRING(15), allowNull: false },
  usn: { type: DataTypes.STRING(20), allowNull: false },
  lunch_status: { 
    type: DataTypes.ENUM('Done', 'Pending'),
    allowNull: false,
    defaultValue: 'Pending'
  }
});

export default LunchDay1;
