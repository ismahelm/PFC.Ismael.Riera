'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      {
        title: 'Curso de JavaScript',
        description: 'Un curso introductorio sobre JavaScript.',
        certificate_validity: 365,
        file_path: '/path/to/javascript-course',
        score_required: 70,
        optional: false,
      },
      {
        title: 'Curso de Python',
        description: 'Aprende lo básico de Python.',
        certificate_validity: 365/2,
        score_required: 90,

        file_path: '/path/to/python-course',
        optional: true,
      },
      {
        title: 'Curso de Desarrollo Web',
        description: 'Curso completo de desarrollo web con HTML, CSS y JS.',
        certificate_validity: 365*2,
        score_required: 80,

        file_path: '/path/to/web-development-course',
        optional: false,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
