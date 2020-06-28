const { Subject } = require('../db/sequelize');

exports.subjectsList = (req, res) => {
  Subject.findAll().then((user) => res.json(user));
};

exports.createSubject = (req, res) => {
  Subject.create(req.body)
    .then((subject) => res.json(subject))
    .catch((err) => {
      const errors = err.errors.map((error) => error.message);
      res.status(400);
      res.json({ errors });
    });
};
