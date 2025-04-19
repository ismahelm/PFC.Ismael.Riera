'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Progress, { foreignKey: 'user_id',
        onDelete: 'CASCADE', });
      User.hasMany(models.Certificate, { foreignKey: 'user_id',
        onDelete: 'CASCADE', });
      User.hasMany(models.TestResult, { foreignKey: 'user_id',
        onDelete: 'CASCADE', });

    }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,  // Aseguramos que el nombre de usuario sea único
      validate: {
        notEmpty: true,  // Validamos que no esté vacío
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,  // Validamos que no esté vacío
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,  // Aseguramos que el email sea único
      validate: {
        notEmpty: true,  // Validamos que no esté vacío
        isEmail: true  // Validamos que el formato del correo electrónico sea correcto
      }
    },position: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',  // Por defecto será 'user', pero esto puedes cambiarlo según tu necesidad
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',  // Por defecto será 'user', pero esto puedes cambiarlo según tu necesidad
    },
    created_at: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW  // Establecemos que el valor por defecto sea la fecha actual
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false  // No utilizamos los timestamps automáticos de Sequelize
  });

  return User;
};
