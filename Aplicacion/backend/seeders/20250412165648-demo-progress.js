'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Progresses', [
      {
        user_id: 1,
        course_id: 1,
        completed_at: new Date(),
        validity: new Date(),
        status: true,

      },
      {
        user_id: 2,
        course_id: 2,
        completed_at: new Date(),
        validity: new Date(),
        status: true,

      },
      {
        user_id: 3,
        course_id: 3,
        completed_at: new Date(),
        validity: new Date(),
        status: false,
        
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Progresses', null, {});
  }
};
