'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Progress.belongsTo(models.User, { foreignKey: 'user_id' });
      Progress.belongsTo(models.Course, { foreignKey: 'course_id' });    }
  }
  Progress.init({
    user_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    completed_at: DataTypes.DATE,
    validity: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    certificate_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Progress',
    timestamps: false  // No utilizamos los timestamps automáticos de Sequelize

  });
  return Progress;
};