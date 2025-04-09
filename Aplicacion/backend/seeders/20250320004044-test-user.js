'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
  
    await queryInterface.bulkInsert('Users', [
      {
      username: "isma",
      email: "example@example.com",
      password: "pass",
      createdAt: new Date(),
      updatedAt: new Date()
  },

]);},

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
