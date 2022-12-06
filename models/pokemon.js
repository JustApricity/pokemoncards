'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemon.init({
    name: DataTypes.STRING,
    hp: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    moveCost1a: DataTypes.STRING,
    moveCost2a: DataTypes.STRING,
    moveCost3a: DataTypes.STRING,
    moveName1: DataTypes.STRING,
    moveDMG1: DataTypes.STRING,
    moveCost1b: DataTypes.STRING,
    moveCost2b: DataTypes.STRING,
    moveCost3b: DataTypes.STRING,
    moveName2: DataTypes.STRING,
    moveDMG2: DataTypes.STRING,
    Weak1: DataTypes.STRING,
    Weak2: DataTypes.STRING,
    Weak3: DataTypes.STRING,
    Res1: DataTypes.STRING,
    Res2: DataTypes.STRING,
    Res3: DataTypes.STRING,
    RetreatCost1: DataTypes.STRING,
    RetreatCost2: DataTypes.STRING,
    RetreatCost3: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'cards',
    timestamps:false
  });
  return Pokemon;
};