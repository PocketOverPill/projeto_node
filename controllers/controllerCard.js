const {DB} = require('../database/DB');
const Card = require('../models/Card');


//Responsável por salvar um card
function saveCard(date, description){
    const card = new Card(null, date, description);
    return DB.setCardDB(card);
}


//Responsável por encontrar os cards
async function findCards(){
    return JSON.stringify(await DB.getCardDB());
}


//Responsável por deletar um card
function deleteCard(id){
    return DB.deleteCardDB(id);
}


//Responsável por editar um card
function updateCard(id, descUpdate){
    return DB.updateCardDB(id, descUpdate);
}


module.exports = { saveCard, findCards, deleteCard, updateCard };
