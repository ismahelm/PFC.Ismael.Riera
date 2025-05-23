'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TestResults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Asegúrate que sea el mismo nombre con el que se creó la tabla
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'      },
      obtained_at: {
        type: Sequelize.DATEONLY
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses', // Asegúrate que sea el mismo nombre con el que se creó la tabla
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'      },
      obtained_at: {
        type: Sequelize.DATEONLY
      },
      score: {
        type: Sequelize.INTEGER
      },
      passed: {
        type: Sequelize.BOOLEAN
      },
      completed_at: {
        type: Sequelize.DATEONLY
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TestResults');
  }
};