'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tests', [
      {
        course_id: 1,
        question_text: '¿Qué es JavaScript?',
        options: JSON.stringify({
          a: 'Un lenguaje de programación',
          b: 'Un sistema operativo',
          c: 'Un servidor web',
        }),
        correct_answer: 'a',
       
      },
      {
        course_id: 2,
        question_text: '¿Qué es Node.js?',
        options: JSON.stringify({
          a: 'Un framework de JavaScript',
          b: 'Un sistema operativo',
          c: 'Un entorno de ejecución para JavaScript',
        }),
        correct_answer: 'c',
        
      },
      {
        course_id: 3,
        question_text: '¿Qué es SQL?',
        options: JSON.stringify({
          a: 'Un lenguaje de programación',
          b: 'Un sistema operativo',
          c: 'Un lenguaje de consulta de bases de datos',
        }),
        correct_answer: 'c',
  
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tests', null, {});
  }
};
