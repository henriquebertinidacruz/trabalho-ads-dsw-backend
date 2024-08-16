'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chamado extends Model {

    static associate(models) {
    }
  }
  Chamado.init({
    filial: DataTypes.STRING,
    solicitante: DataTypes.STRING,
    local: DataTypes.STRING,
    item: DataTypes.STRING,
    descricao_problema: DataTypes.TEXT,
    observacao: DataTypes.TEXT,
    solucao: DataTypes.TEXT,
    status: DataTypes.STRING,
    tecnico_responsavel: DataTypes.STRING,
    departamento_solicitante: DataTypes.STRING,
    departamento_solicitado: DataTypes.STRING,
    departamento_tecnico_responsavel: DataTypes.STRING,
    data_hora_abertura: DataTypes.DATE,
    data_hora_encerramento: DataTypes.DATE,
    data_hora_aceite: DataTypes.DATE,
    downtime_solicitante: DataTypes.TIME,
    downtime_tecnico: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Chamado',
  });
  return Chamado;
};