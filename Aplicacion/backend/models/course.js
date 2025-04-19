'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.hasMany(models.Progress, { foreignKey: 'course_id',
        onDelete: 'CASCADE', });
      Course.hasMany(models.Certificate, { foreignKey: 'course_id',
        onDelete: 'CASCADE', });
      Course.hasMany(models.TestResult, { foreignKey: 'course_id',
        onDelete: 'CASCADE', });
      Course.hasHooks(models.Test, {foreignKey: 'course_id',
        onDelete: 'CASCADE',})


    }
  }
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    certificate_validity: DataTypes.INTEGER,
    score_required: DataTypes.INTEGER,
    file_path: DataTypes.STRING,
    optional: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Course',
    timestamps: false  // No utilizamos los timestamps automáticos de Sequelize

  });
  return Course;
};