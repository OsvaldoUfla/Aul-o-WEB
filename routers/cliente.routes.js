// Responsável por gerenciar as rotas de cliente e suas requisições HTTP.
// chama o controller de cliente.controller.js
import express from 'express';
import clienteController from '../controllers/cliente.controller.js';

const router = express.Router();

router.get('/',clienteController.consultarCliente);
router.get('/:cpf',clienteController.consultarClientePorCPF); 
router.post('/',clienteController.cadastrarCliente);
router.put('/:cpf',clienteController.editarCliente);
router.delete('/:cpf',clienteController.excluirCliente);

export default router;