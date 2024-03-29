//Biblioteca MySql 2
const mysql = require('mysql2');

class DB {
    static connection;

    //Responsável por realizar a configuração de conexão com o BD
    static config = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT
    }

    //Responsável por abrir uma conexão com o BD
    static open(){
        DB.connection = mysql.createConnection(DB.config);
        DB.connection.connect();
    }

    //Responsável por finalizar a conexão com o BD
    static close(){
        DB.connection.end();
    }

    //Salvar um card no BD
    static setCardDB(card){
        try{

            const date = card.getDate();
            const description = card.getDescription();
            DB.open();
            DB.connection.query(`INSERT INTO mdl_cards (description, date) VALUES ('${description}', '${date}')`);
            DB.close();

            return true;

        }catch(error){

            return false;

        }
    }

    // Buscar todos os cards no BD
    static async getCardDB(){
        let cards = "";
        const query = `SELECT * FROM mdl_cards`;

        try {

            DB.open();
            cards = await DB.connection.promise().query(query);
            DB.close();

        }catch(error){
            return false;
        }

        return cards[0];

    }


    // Deletar um card do BD
    static deleteCardDB(cardId){
        try{

            DB.open();
            DB.connection.query(`DELETE FROM mdl_cards WHERE id=${cardId}`);
            DB.close();
            return true;

        }catch(error){
            return false;
        }
    }


    // Editar um card do BD
    static updateCardDB(cardId, cardDesc){
        try{

            DB.open();
            DB.connection.query(`UPDATE mdl_cards SET description = '${cardDesc}' WHERE id=${cardId}`);
            DB.close();
            return true;

        }catch(error){
            return false;
        }
    }
}

module.exports = {DB};
