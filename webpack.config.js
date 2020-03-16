const path = require('path');

module.exports = {
    entry: './app.js',
    target: 'node',
    output: {
        path: path.resolve('./dist'),
        filename: 'release.js',
    },
    externals: {
        newrelic: 'newrelic'
    }
};