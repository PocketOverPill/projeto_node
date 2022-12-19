const {DB} = require('../database/DB');
const Card = require('../models/Card');

//Responsável por salvar um card
function saveCards(date, description){
    const card = new Card(null, date, description);
    
    return DB.setCardDB(card);
}

async function findCards(){
    return JSON.stringify(await DB.getCardDB());
}

module.exports = {saveCards, findCards};