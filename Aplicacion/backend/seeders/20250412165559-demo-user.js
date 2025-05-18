'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        fullname: "admin",
        password: 'pass',
        position: 'Administrator',
        email: 'admin@example.com',
        role: 'trainer',
        created_at: new Date(),  // Asegúrate de usar "created_at" en lugar de "createdAt"
      },
      {
        username: 'user1',
        password: 'password123',
        fullname: "admin",

        position: 'Student',
        email: 'user1@example.com',
        role: 'user',
        created_at: new Date(),
      },
      {
        username: 'user2',
        fullname: "admin",

        password: 'password123',
        position: 'Teacher',
        email: 'user2@example.com',
        role: 'user',
        created_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
