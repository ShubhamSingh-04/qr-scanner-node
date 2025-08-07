import express from 'express';
import logger from './utils/logger.util.js'
import getRelativePath from './utils/getRelativeFilePath.util.js';
import morgan from 'morgan';
import env from './config/env.js';
import mealRoutes from './routes/meal.route.js'
import attendanceRoute from './routes/attendance.route.js'

const thisFilePath = getRelativePath(import.meta.url); // Path to this file

import cors from 'cors';

const app = express()

// Parse JSON request bodies
app.use(express.json())

// Morgan for logging HTTP requests
app.use(morgan('dev'))


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.options('/*splat', cors()); // enable pre-flight across-the-board

app.use('/api/meal', mealRoutes);
app.use('/api/attendance', attendanceRoute);

app.get('/health', (req, res) => {
    logger.success("Health check endpoint hit", thisFilePath + '\\health');
    res.status(200).json({ message: "Code Vault Backend Health", status: "Everything Okay bro"})
})


export default app;

