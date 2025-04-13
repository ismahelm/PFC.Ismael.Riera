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
        certificate_path: '/path/to/certificate1.pdf',

      },
      {
        user_id: 2,
        course_id: 2,
        completed_at: new Date(),
        validity: new Date(),
        status: true,
        certificate_path: '/path/to/certificate2.pdf',

      },
      {
        user_id: 3,
        course_id: 3,
        completed_at: new Date(),
        validity: new Date(),
        status: false,
        certificate_path: '/path/to/certificate3.pdf',
        
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Progresses', null, {});
  }
};
