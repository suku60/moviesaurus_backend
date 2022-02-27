'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.Order, {
        foreignKey: 'userId'
      });
      this.hasOne(models.Payment, {
        foreignKey: 'userId'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};