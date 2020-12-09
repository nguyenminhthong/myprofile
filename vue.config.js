const base = require('./build/base.config');

base['devServer'] = {
    port: process.env.VUE_APP_PORT
}

module.exports = base;
