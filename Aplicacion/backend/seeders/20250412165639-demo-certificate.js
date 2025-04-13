'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Certificates', [
      {
        user_id: 1,
        course_id: 1,
        obtained_at: new Date(),
        file_path: '/path/to/certificate1.pdf',

      },
      {
        user_id: 2,
        course_id: 2,
        obtained_at: new Date(),
        file_path: '/path/to/certificate2.pdf',

      },
      {
        user_id: 3,
        course_id: 3,
        obtained_at: new Date(),
        file_path: '/path/to/certificate3.pdf',

      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Certificates', null, {});
  }
};
