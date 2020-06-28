module.exports = (sequelize, type) => sequelize.define('subject', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: type.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'name of subject is required' },
    },
  },
  scheduleNumber: {
    type: type.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: 'schedule number of subject is required' },
    },
  },
});
