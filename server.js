// server é reponsavel por rodar a aplicação
// escutar as requisições http
import express from 'express';
import bodyParser from 'body-parser';
import clienteRouter from './routers/cliente.routes.js';

const port = 3001;

const app = express();
app.use(bodyParser.json());

app.use("/clientes", clienteRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});