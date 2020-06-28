module.exports = (sequelize, type) => sequelize.define('teacher', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: type.STRING,
  surname: type.STRING,
});
