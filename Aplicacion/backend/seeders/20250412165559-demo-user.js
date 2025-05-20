'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassAdmin = await bcrypt.hash('pass', 10);
    const hashedPass1 = await bcrypt.hash('pass', 10);
    const hashedPass2 = await bcrypt.hash('pass', 10);

    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        fullname: "admin",
        password: hashedPassAdmin,
        position: 'Administrator',
        email: 'admin@example.com',
        role: 'trainer',
        created_at: new Date(),
      },
      {
        username: 'user1',
        fullname: "admin",
        password: hashedPass1,
        position: 'Student',
        email: 'user1@example.com',
        role: 'user',
        created_at: new Date(),
      },
      {
        username: 'user2',
        fullname: "admin",
        password: hashedPass2,
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
