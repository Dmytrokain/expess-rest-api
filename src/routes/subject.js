const router = require('express').Router();
const subjectsController = require('../controllers/subjectsController');

router.get('/', subjectsController.subjectsList);
router.get('/:id', subjectsController.getSubject);

router.post('/', subjectsController.createSubject);
router.patch('/:id', subjectsController.updateSubject);

router.delete('/:id', subjectsController.deleteSubject);

module.exports = router;
