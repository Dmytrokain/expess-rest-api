const { Subject } = require('../../db/sequelize');

module.exports = (req, res) => {
  Subject.findAll().then((user) => res.json(user));
};
