global.newrelic = require('newrelic'); // Expose the agent in the global scope
require('./bundle.js'); // Load the output of the webpack build