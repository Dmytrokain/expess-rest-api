const routes = require('express').Router();
const subjects = require('./subjects');

routes.use('/subjects', subjects);

module.exports = routes;
