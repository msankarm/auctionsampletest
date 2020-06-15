const crypto = require('crypto');
/**
 * hash Method
 *
 * @param {String} e.g.: 'md5', 'sha1'
 * @param {String|Buffer} s
 * @param {String} [format] 'hex'，'base64'. default is 'hex'.
 * @return {String} Coded value
 * @private
 */
const hash = (method, s, format) => {
    var sum = crypto.createHash(method);
    var isBuffer = Buffer.isBuffer(s);
    if(!isBuffer && typeof s === 'object') {
        s = JSON.stringify(sortObject(s));
    }
    sum.update(s, isBuffer ? 'binary' : 'utf8');
    return sum.digest(format || 'hex');
};

/**
 - md5 Code
 -  3. @param {String|Buffer} s
 - @param {String} [format] 'hex'，'base64'. default is 'hex'.
 - @return {String} md5 hash string
 - @public
 */
const md5 = (s, format) => {
    return hash('md5', s, format);
};
module.exports = {
    md5
};