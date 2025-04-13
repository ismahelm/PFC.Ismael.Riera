'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TestResults', [
      {
        user_id: 1,
        course_id: 1,
        score: 90,
        passed: true,
        completed_at: new Date(),

      },
      {
        user_id: 2,
        course_id: 2,
        score: 85,
        passed: true,
        completed_at: new Date(),

       
      },
      {
        user_id: 3,
        course_id: 3,
        score: 60,
        passed: false,
        completed_at: new Date(),

      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TestResults', null, {});
  }
};
