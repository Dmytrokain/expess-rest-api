const subjects = require('express').Router();
const allSubjects = require('./allSubjects');

subjects.get('/', allSubjects);

module.exports = subjects;
