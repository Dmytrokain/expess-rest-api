const router = require('express').Router();
const subjectsController = require('../controllers/subjectsController');

router.get('/', subjectsController.subjectsList);
router.post('/', subjectsController.createSubject);

module.exports = router;
