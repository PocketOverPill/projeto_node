//Biblioteca Express
const express = require('express');
const router = express.Router();

//Controllers
const {saveCard, findCards, deleteCard} = require('../controllers/controllerCard');

//Buscar todos os cards salvos
router.get('/find', async (req,res)=>{

    res.send(await findCards());
});

//Salva um card no banco de dados
router.post('/save', (req,res)=>{
    const date = req.body.date;
    const description = req.body.description;

    res.send(saveCard(date, description));
})

//Deletar um card no banco de dados
router.delete('/delete', (req,res)=>{
    const id = req.body.id;

    res.send(deleteCard(id));
})

//Exportar o router
module.exports = router;
