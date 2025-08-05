/**
* @fileoverview Utility function to get the relative path of a file.
* @author Shubham Singh
* @description This function returns the relative path of a file from the current working directory.
*/

import path from 'path';
import { fileURLToPath } from 'url';


/**
 * * @param {URL} metaUrl - The URL of the module file.
 * * @returns {string} - The relative path of the file from the current working directory.
 * * @description Returns the relative path of the file from the current working directory.
 */
export default function getRelativePath(metaUrl) {
    // Convert the module URL to a file path
    const __filename = fileURLToPath(metaUrl);
    
    // Get the relative path from the current working directory
    return path.relative(process.cwd(), __filename);
}