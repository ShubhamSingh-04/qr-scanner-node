import app from './app.js';
import env from './config/env.js';
import logger from './utils/logger.util.js';
import getRelativePath from './utils/getRelativeFilePath.util.js';
import sequelize from './config/db.js';

const thisFilePath = getRelativePath(import.meta.url); // Path to this file
const PORT = env.PORT || 5000;

const startServer = async () => {
  try {
    // Authenticate DB connection
    await sequelize.authenticate();
    logger.success('Connected to PostgreSQL database successfully!', thisFilePath);

    // Optional: sync models (create tables)
    // await sequelize.sync({ alter: true }); // Use cautiously

    // Start server only after DB is connected
    app.listen(PORT, () => {
      logger.success(`🚀 Server running on port ${PORT}`, thisFilePath);
    });

  } catch (error) {
    logger.error(`Unable to connect to the database: ${error.message}`, thisFilePath);
    process.exit(1); // Exit the app on DB failure
  }
};

startServer();
