import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Rota para servir a página inicial
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../view', 'clientes.html'));
});

export default router;