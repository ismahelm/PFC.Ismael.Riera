'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class TestResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TestResult.belongsTo(models.User, { foreignKey: 'user_id' });
      TestResult.belongsTo(models.Course, { foreignKey: 'course_id' });            }
  }
  TestResult.init({
    user_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    passed: DataTypes.BOOLEAN,
    completed_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TestResult',
    timestamps: false  // No utilizamos los timestamps automáticos de Sequelize

  });
  return TestResult;
};