'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Ensure environment variables are read.
require('../config/env');

// Exec process
const exec = require('child_process').exec;
exec('codeclimate-test-reporter < coverage/lcov.info');
exec('codacy-coverage < coverage/lcov.info');
