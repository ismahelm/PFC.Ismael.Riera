'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tests', [
      {
        course_id: 3,
        question_text: '¿Qué es JavaScript?',
        options: JSON.stringify({
          a: 'Un lenguaje de programación',
          b: 'Un sistema operativo',
          c: 'Un servidor web',
        }),
        correct_answer: 'a',
      },
      {
        course_id: 3,
        question_text: '¿Cuál es el resultado de 2 + "2" en JavaScript?',
        options: JSON.stringify({
          a: '22',
          b: '4',
          c: 'NaN',
        }),
        correct_answer: 'a',
      },
      {
        course_id: 3,
        question_text: '¿Qué método se usa para imprimir en consola?',
        options: JSON.stringify({
          a: 'console.log()',
          b: 'print()',
          c: 'log.console()',
        }),
        correct_answer: 'a',
      },
      {
        course_id: 1,
        question_text: '¿Qué estructura de control se usa para repetir código?',
        options: JSON.stringify({
          a: 'if',
          b: 'loop',
          c: 'for',
        }),
        correct_answer: 'c',
      },
     
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tests', null, {});
  }
};
