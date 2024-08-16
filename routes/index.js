const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const chamadoController = require('../controllers/chamadoController');

const router = express.Router();

// Rotas para Usuarios
router.post('/usuarios', usuarioController.createUsuario);
router.get('/usuarios', usuarioController.getUsuarios);
router.get('/usuarios/:id', usuarioController.getUsuario);
router.put('/usuarios/:id', usuarioController.updateUsuario);
router.delete('/usuarios/:id', usuarioController.deleteUsuario);

// Rotas para Chamados
router.post('/chamados', chamadoController.createChamado);
router.get('/chamados', chamadoController.getChamados);
router.get('/chamados/:id', chamadoController.getChamado);
router.put('/chamados/:id', chamadoController.updateChamado);
router.delete('/chamados/:id', chamadoController.deleteChamado);

module.exports = router;
