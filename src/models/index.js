import sequelize from '../config/db.js';
import TeamData from './TeamData.model.js';
import LunchDay1 from './LunchDay1.model.js';
import DinnerDay1 from './DinnerDay1.model.js';
import BreakFastDay2 from './BreakfastDay2.model.js';

const db = {
  sequelize,
  TeamData,
  LunchDay1,
  DinnerDay1,
  BreakFastDay2
};

export default db;
