'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Chamado extends Model {}
// Tabela não contém relacionamento
  Chamado.init({
    solicitante: DataTypes.STRING,
    local: DataTypes.STRING,
    item: DataTypes.STRING,
    descricao_problema: DataTypes.TEXT,
    observacao: DataTypes.TEXT,
    solucao: DataTypes.TEXT,
    status: DataTypes.STRING,
    tecnico_responsavel: DataTypes.STRING,
    data_hora: DataTypes.DATE,
    downtime: DataTypes.TIME,
  }, {
    sequelize,
    modelName: 'Chamado',
    tableName: 'chamados',
    timestamps: false,
  });

  return Chamado;
};
