module.exports = {
    entry: './app.js',
    target: 'node',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    externals: {
        newrelic: 'newrelic'
    }
};