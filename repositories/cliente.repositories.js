// Objetivo: Implementar as funções de acesso ao banco de dados
import pg from 'pg';

async function consultarCliente(){
    const conn = await conectar();
    try{
        var sql = "SELECT * FROM clientes"
        var query = await conn.query(sql);
    }   catch (err){
        console.log(err);
    } finally{      
        conn.release();
    }
    return query.rows
}

async function consultarClientePorCPF(cpf){ //depois ver
    const conn = await conectar();
    try{
        var sql = "SELECT * FROM clientes WHERE cpf=$1";
        var query = await conn.query(sql, [cpf]);

    }   catch (err){
        console.log(err);
    } finally{      
        conn.release();
    }
    return query.rows
}

async function cadastrarCliente(cliente){
    const conn = await conectar();
    try{
        var sql = "INSERT INTO clientes (cpf, nome, salario, nascimento) VALUES ($1, $2, $3, $4) returning *";

        var query = await conn.query(sql, [cliente.cpf, cliente.nome, cliente.salario, cliente.nascimento]);
    }   catch (err){
        console.log(err);
    } finally{      
        conn.release();
    }
    return query.rows
}

async function excluirCliente(cpf){
    const conn = await conectar();
    try{
        var sql = "delete from clientes where cpf = $1 returning *";
        var query = await conn.query(sql, [cpf]);
    }   catch (err){
        console.log(err);
    } finally{      
        conn.release();
    }
    return "Cliente excluido com sucesso";
}

async function editarCliente(cpf, cliente){
    const conn = await conectar();
    try{
        var sql = "update clientes set cpf = $1, nome = $2, salario = $3, nascimento = $4 where cpf = $5 returning *";
        var query = await conn.query(sql, [cliente.cpf, cliente.nome, cliente.salario, cliente.nascimento, cpf]);
    }   catch (err){
        console.log(err);
    } finally{      
        conn.release();
    }
    return query.rows
}

async function conectar(){
    const pool = new pg.Pool({        
        user: 'postgres', 
        host: 'localhost', 
        database: 'BDTeste', 
        password: '2022#estudante',
        port: 5432
    })

    return await pool.connect();    
}

export default {
                consultarCliente, cadastrarCliente, 
                consultarClientePorCPF, editarCliente, excluirCliente
            };