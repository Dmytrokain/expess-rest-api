const { Subject } = require('../db/sequelize');

exports.subjectsList = (req, res) => {
  Subject.findAll().then((user) => res.json(user));
};
