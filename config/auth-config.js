const config = require('config');
const secret = config.get('secret');

const authConfig = {
    oneDay: (1000 * 60 * 60 * 24),
    secret,
}

module.exports = authConfig;