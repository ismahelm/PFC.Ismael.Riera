'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Certificates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses', // Asegúrate que sea el mismo nombre con el que se creó la tabla
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
      file_path: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Certificates');
  }
};