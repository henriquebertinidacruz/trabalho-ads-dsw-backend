'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Usuario extends Model {}
// Tabela não contém relacionamento
  Usuario.init({
    filial: DataTypes.STRING,
    nome: DataTypes.STRING,
    nivel_acesso: DataTypes.STRING,
    senha: DataTypes.STRING(35),
    data_hora: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: false,
  });

  return Usuario;
};
