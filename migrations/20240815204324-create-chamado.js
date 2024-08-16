'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Chamados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      filial: {
        type: Sequelize.STRING
      },
      solicitante: {
        type: Sequelize.STRING
      },
      local: {
        type: Sequelize.STRING
      },
      item: {
        type: Sequelize.STRING
      },
      descricao_problema: {
        type: Sequelize.TEXT
      },
      observacao: {
        type: Sequelize.TEXT
      },
      solucao: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
      },
      tecnico_responsavel: {
        type: Sequelize.STRING
      },
      departamento_solicitante: {
        type: Sequelize.STRING
      },
      departamento_solicitado: {
        type: Sequelize.STRING
      },
      departamento_tecnico_responsavel: {
        type: Sequelize.STRING
      },
      data_hora_abertura: {
        type: Sequelize.DATE
      },
      data_hora_encerramento: {
        type: Sequelize.DATE
      },
      data_hora_aceite: {
        type: Sequelize.DATE
      },
      downtime_solicitante: {
        type: Sequelize.TIME
      },
      downtime_tecnico: {
        type: Sequelize.TIME
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Chamados');
  }
};