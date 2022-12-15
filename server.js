//Biblioteca Express
const express = require('express');
const app = express();

//Variaveis Ambientes
require('dotenv').config();

//Biblioteca Path
const path = require('path');

//Importação das Rotas
const apiRouter = require('./routes/api');

//Constantes
const PORT = 3500;

//Configuração das Requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Rotas
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/api', apiRouter);

//Listen
app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT}`);
});

