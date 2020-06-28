const { Subject } = require('../db/sequelize');

exports.subjectsList = (req, res) => {
  Subject.findAll().then((user) => res.json(user));
};

exports.getSubject = (req, res) => {
  Subject.findOne({
    where: { id: req.params.id },
  }).then((user) => res.json(user));
};

exports.deleteSubject = (req, res) => {
  Subject.destroy({
    where: { id: req.params.id },
  }).then((result) => {
    if (result === 1) {
      res.status(200).json({ message: 'Subject was deleted' });
    } else {
      res.status(404).json({ message: 'Error occured while deleting subject' });
    }
  });
};

exports.createSubject = (req, res) => {
  Subject.create(req.body)
    .then((subject) => res.json(subject))
    .catch((err) => {
      res.status(400);
      res.json({ err });
    });
};

exports.updateSubject = (req, res) => {
  Subject.update(req.body, {
    where: { id: req.params.id },
  }).then((user) => res.json(user));
};
