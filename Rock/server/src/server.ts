import express from 'express';

import cors from 'cors';

import routes from './routes';

import path from 'path';

import {errors} from 'celebrate';


const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);



app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);








/////////////////////////////////ANOTAÇÕES////////////////////////////////////




//Rota : endereço completo da requisição
//recurso: oque queremos acessar na rota


//get = buscar uma ou mais informações do back-end
//post = criar uma nova informação no back-end
//put = atualizar uma informação existente no back-end
//delete = remover uma informação do back-end


//post http://localhost:3333/user = criar um um usuario
// get http://localhost:3333/user = listar usuarios
//get http://localhost:3333/user/5 = buscar dados do usuario com ID 5


//request param: paramentros que vem na propria rota que identificam um recurso
// query param: Paramentros que vem na propria rota ->
//-> geralmente opcionais para filtros, paginação
//request body: paramentros para criação/atualização de informações



//SELECT * FROM users WHERE name="diego"
//knex ('users').where('name','diego').select('*')





/*
app.get('/users/:id', (request, response) =>{


    const id =Number( request.params.id);

    const user = users[id];
    return response.json(user);



} );




app.post('/users', (request, response) => {
const data = request.body;

console.log(data);



    const user = {
        name: data.name,
        email: data.email,

    };
    return response.json(user);

});
*/

