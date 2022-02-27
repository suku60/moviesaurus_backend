'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Card, {
        foreignKey: 'paymentId'
      });
      this.hasMany(models.Paypal, {
        foreignKey: 'paymentId'
      });
      this.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }
  Payment.init({
    userId: DataTypes.INTEGER,
    card: DataTypes.BOOLEAN,
    cardId: DataTypes.STRING,
    paypal: DataTypes.BOOLEAN,
    paypalId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};