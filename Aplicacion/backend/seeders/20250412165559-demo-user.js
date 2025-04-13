'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        password: 'password123',
        position: 'Administrator',
        email: 'admin@example.com',
        role: 'admin',
        created_at: new Date(),  // Asegúrate de usar "created_at" en lugar de "createdAt"
      },
      {
        username: 'user1',
        password: 'password123',
        position: 'Student',
        email: 'user1@example.com',
        role: 'user',
        created_at: new Date(),
      },
      {
        username: 'user2',
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
