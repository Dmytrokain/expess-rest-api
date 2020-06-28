const router = require('express').Router();

router.get('/', (req, res) => {
  res.redirect('/subjects');
});

module.exports = router;
