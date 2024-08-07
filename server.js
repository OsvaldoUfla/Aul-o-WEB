// server é reponsavel por rodar a aplicação
// escutar as requisições http
import express from 'express';
import bodyParser from 'body-parser';
import viewsRouter from './routers/views.routes.js';
import clienteRouter from './routers/cliente.routes.js';

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use("/", viewsRouter);
app.use("/clientes", clienteRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});