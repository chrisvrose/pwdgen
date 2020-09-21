const crypto = require('crypto');

/**
 * Generate a password
 * @param {number} size Size of password
 * @param {boolean} symbols Whether to use base64 or not
 * @returns {string} Generated password
 */
module.exports = function generatePassword(size=128,symbols=false){
    const rnd = crypto.randomBytes(size);
    if(symbols){
        return rnd.toString('base64');
    }
    return rnd.toString('hex');
}