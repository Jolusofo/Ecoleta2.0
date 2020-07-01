import knex from 'knex';
import path from 'path';


const connection = knex({
    client: 'sqlite3',
    connection:{
        filename:path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});



export default connection;
 

//Migrations = historico do banco de dados

//da ruimmmm isso a baixo 2 linhas
// create table points
// create table users