// controller é responsável por receber, validar as requisições http e enviar para o service e retornar a resposta para o cliente.
import clienteServices from "../services/cliente.services.js";

async function consultarCliente(req, res){
    res.send( await clienteServices.consultarCliente());
}

async function consultarClientePorCPF(req, res){
    let cpf = req.params.cpf;
    if(cpf == undefined || cpf == null){
        console.log('CPF invalido');
        res.send('CPF invalido '+ cpf);
    } else {    
        res.send( await clienteServices.consultarClientePorCPF(cpf));
    }   
}

async function cadastrarCliente(req, res){
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let salario = req.body.salario;
    let nascimento = req.body.nascimento;

    //validar os dados

    res.send(await clienteServices.cadastrarCliente({cpf, nome, salario, nascimento}));
}

async function excluirCliente(req, res){
    let cpf = req.params.cpf;
    console.log(cpf);
    //validar os dados
    res.send(await clienteServices.excluirCliente(cpf));
}

async function editarCliente(req, res){
    let cpf_alterar = req.params.cpf;   

    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let salario = req.body.salario;
    let nascimento = req.body.nascimento;

    
    res.send(await clienteServices.editarCliente(cpf_alterar, {cpf, nome, salario, nascimento}));
}


export default {
                consultarCliente, cadastrarCliente, 
                consultarClientePorCPF, editarCliente, excluirCliente
            };