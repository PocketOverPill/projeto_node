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


module.exports = { saveCard, findCards, deleteCard };
