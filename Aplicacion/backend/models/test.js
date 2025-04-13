'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Test.belongsTo(models.Course, {
        foreignKey: 'course_id',
        as: 'course'
      });    }
  }
  Test.init({
    course_id: DataTypes.INTEGER,
    question_text: DataTypes.TEXT,
    options: DataTypes.JSONB,
    correct_answer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Test',
    timestamps: false  // No utilizamos los timestamps automáticos de Sequelize

  });
  return Test;
};