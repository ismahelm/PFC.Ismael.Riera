'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Certificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Certificate.belongsTo(models.User, { foreignKey: 'user_id' });
      Certificate.belongsTo(models.Course, { foreignKey: 'course_id' });        }
  }
  Certificate.init({
    course_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    obtained_at: DataTypes.DATE,
    file_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Certificate',
    timestamps: false  // No utilizamos los timestamps automáticos de Sequelize

  });
  return Certificate;
};