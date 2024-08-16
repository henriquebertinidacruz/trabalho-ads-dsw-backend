'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      filial: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      departamento: {
        type: Sequelize.STRING
      },
      nivel_acesso: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      data_hora: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};