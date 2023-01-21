'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profiles.init({
    user_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    contact_no: DataTypes.INTEGER,
    profile_pic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
    tableName:'profiles'
  });
  return profiles;
};