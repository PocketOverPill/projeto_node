//Biblioteca Express
const express = require('express');
const router = express.Router();

//Controllers
const {saveCards, findCards} = require('../controllers/controllerCard');

//Buscar todos os cards salvos
router.get('/find', (req,res)=>{

    findCards().then(card => res.send(card));

});

//Salva um card no banco de dados
router.post('/save', (req,res)=>{
    const date = req.body.date;
    const description = req.body.description;

    res.send(saveCards(date, description));
})

//Exportar o router
module.exports = router;