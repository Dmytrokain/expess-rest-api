const router = require('express').Router();
const subjectsController = require('../controllers/subjectsController');

router.get('/', subjectsController.subjectsList);

module.exports = router;
