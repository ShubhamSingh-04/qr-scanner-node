import { Sequelize } from 'sequelize';
import env from './env';
import logger from '../utils/logger.util.js'
import getRelativePath from '../utils/getRelativeFilePath.util.js';


const thisFilePath = getRelativePath(import.meta.url); // Path to this file

if(!env.DB_HOST ||
    !env.DB_NAME ||
    !env.DB_PASS ||
    !env.DB_USER){
        logger.error("DB_HOST, DB_NAME, DB_PASS, DB_USER required in src\\config\\env.js", thisFilePath)
    }

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
  host: env.DB_HOST,
  dialect: 'postgres',
  logging: false, // disable SQL logs in terminal
});

export default sequelize;
