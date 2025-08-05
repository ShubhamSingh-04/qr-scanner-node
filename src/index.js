import app from './app.js';
import env from './config/env.js';
import logger from './utils/logger.util.js';
import getRelativePath from './utils/getRelativeFilePath.util.js';

const thisFilePath = getRelativePath(import.meta.url); // Path to this file

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  logger.success(`Server running on port ${PORT}`, thisFilePath)
});
