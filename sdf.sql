-- CREATE DATABASE BDTeste;

-- Seleção do banco de dados
-- USE BDTeste;

-- Criação da tabela cliente
CREATE TABLE clientes (
    cpf VARCHAR(11) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    salario DECIMAL(10,2) NOT NULL,
    nascimento DATE
);

-- Inserção de um exemplo de registro
INSERT INTO clientes (cpf, nome, salario, nascimento)
VALUES ('12345678901', 'João da Silva', 3500.00, '1985-10-15');

INSERT INTO clientes (cpf, nome, salario, nascimento)
VALUES ('98765432100', 'Maria Oliveira', 4200.00, '1990-03-22');

INSERT INTO clientes (cpf, nome, salario, nascimento)
VALUES ('12312312345', 'Carlos Pereira', 2800.00, '1988-07-12');

INSERT INTO clientes (cpf, nome, salario, nascimento)
VALUES ('45645645678', 'Ana Souza', 5300.00, '1992-05-30');

INSERT INTO clientes (cpf, nome, salario, nascimento)
VALUES ('78978978901', 'Luiz Fernandes', 3100.00, '1982-11-05');

INSERT INTO clientes (cpf, nome, salario, nascimento)
VALUES ('32132132145', 'Beatriz Santos', 4700.00, '1986-02-14');

INSERT INTO clientes (cpf, nome, salario, nascimento)
VALUES ('65465465478', 'Paulo Mendes', 3600.00, '1979-08-27');

INSERT INTO clientes (cpf, nome, salario, nascimento)
VALUES ('98798798701', 'Juliana Costa', 5800.00, '1995-12-10');

INSERT INTO clientes (cpf, nome, salario, nascimento)
VALUES ('11111111111', 'Fernando Lima', 2950.00, '1987-04-19');

INSERT INTO clientes (cpf, nome, salario, nascimento)
VALUES ('22222222222', 'Renata Alves', 3900.00, '1991-06-23');

INSERT INTO clientes (cpf, nome, salario, nascimento)
VALUES ('33333333333', 'Gabriel Rocha', 4500.00, '1989-01-31');
