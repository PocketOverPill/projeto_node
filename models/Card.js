class Card{    
    constructor(id = null, date, description){
        this.id = id;
        this.date = date;
        this.description = description;
    }

    getDate(){
        return this.date;
    }

    getDescription(){
        return this.description;
    }

}

module.exports = Card;