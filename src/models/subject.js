module.exports = (sequelize, type) => sequelize.define('subject', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: type.STRING,
  theme: type.STRING,
  scheduleNumber: type.INTEGER,
});
