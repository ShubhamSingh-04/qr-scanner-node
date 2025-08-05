/**
* @fileoverview Utility functions for logging messages in the application.
* @author Shubham Singh
* @description This module provides functions to log messages with different severity levels (error, info, success) using chalk for color formatting.
*/


import chalk from "chalk";

function logError(message, filePath = 'unknown') {
    console.error(chalk.red(`[${filePath}] ERROR: ${message}`));
}

function logInfo(message, filePath = 'unknown') {
    console.info(chalk.blue(`[${filePath}] INFO: ${message}`));
}

function logSuccess(message, filePath = 'unknown') {
    console.log(chalk.green(`[${filePath}] SUCCESS: ${message}`));
}

function logWarning(message, filePath = 'unknown') {
    console.warn(chalk.yellow(`[${filePath}] WARNING: ${message}`));
}

// Exporting the logging functions as an object for easy access
export default{
    error: logError,
    info: logInfo,
    success: logSuccess,
    warn: logWarning
}