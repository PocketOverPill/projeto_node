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

    //Salva um card no BD
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
    

    /* //Realiza a consulta de vários
    static async select_many_sql(query){

        const result = await DB.connection.promise().query(query);

        return result[0];
    }

    static select_sql(query){
        let res = "";
        DB.connection.query(query, (error, result, fields)=>{
            if(error) throw error;
            res = result;
        })

        return res;
    }

    static insert_sql(query){
        DB.connection.query(query, (error, result, fields)=>{
            if(error) throw error;
        })
    } */
}

module.exports = {DB};