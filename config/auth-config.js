const config = require('config');
const key = config.get('secret');

module.exports.authConfig = {
    oneDay: 1000 * 60 * 60 * 24,
    secret: key,    
}