// Controller de Chamados
const { Chamado } = require('../models');

exports.createChamado = async (req, res) => {
  try {
    const chamado = await Chamado.create(req.body);
    res.status(201).json(chamado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getChamados = async (req, res) => {
  try {
    const chamados = await Chamado.findAll();
    res.status(200).json(chamados);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getChamado = async (req, res) => {
  try {
    const chamado = await Chamado.findByPk(req.params.id);
    if (chamado) {
      res.status(200).json(chamado);
    } else {
      res.status(404).json({ message: 'Chamado não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateChamado = async (req, res) => {
  try {
    const chamado = await Chamado.findByPk(req.params.id);
    if (chamado) {
      await chamado.update(req.body);
      res.status(200).json(chamado);
    } else {
      res.status(404).json({ message: 'Chamado não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteChamado = async (req, res) => {
  try {
    const chamado = await Chamado.findByPk(req.params.id);
    if (chamado) {
      await chamado.destroy();
      res.status(200).json({ message: 'Chamado deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Chamado não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};