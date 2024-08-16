'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
    }
  }
  Usuario.init({
    filial: DataTypes.STRING,
    nome: DataTypes.STRING,
    departamento_id: DataTypes.STRING,
    nivel_acesso: DataTypes.STRING,
    senha: DataTypes.STRING,
    data_hora: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};