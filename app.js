import express from 'express';
import get

const app = express()
// Parse JSON request bodies
app.use(express.json())

// Morgan for logging HTTP requests
app.use(morgan('dev'))

const thisFilePath = getRelativePath(import.meta.url); // Path to this file