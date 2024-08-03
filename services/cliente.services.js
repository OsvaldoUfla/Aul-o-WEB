// Aqui em service fica a lógica de negócio da aplicação(Regras de negócio)
import clienteRepository from '../repositories/cliente.repositories.js';

async function consultarCliente(){
     // Implementar a regra de negócio
    return await clienteRepository.consultarCliente();
}

async function consultarClientePorCPF(cpf){
     // Implementar a regra de negócio
    return await clienteRepository.consultarClientePorCPF(cpf);
}

async function cadastrarCliente(cliente){
     // Implementar a regra de negócio
    if (clienteRepository.consultarClientePorCPF(cliente.cpf).length > 0){
        return "CPF já cadastrado";
    }
    else{
        return await clienteRepository.cadastrarCliente(cliente);
    }
}

async function excluirCliente(cpf){
    // Implementar a regra de negócio
    // Posso excluir o cliente se ele não tiver contas ou tiver dividas ou compras pendentes?
    return await clienteRepository.excluirCliente(cpf);
}

async function editarCliente(cpf, cliente){
    // Implementar a regra de negócio
    // Posso alterar o cpf do cliente
    return await clienteRepository.editarCliente(cpf, cliente); 
}

export default {
                consultarCliente, cadastrarCliente, 
                consultarClientePorCPF, editarCliente, excluirCliente
            };