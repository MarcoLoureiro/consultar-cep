import express,{Request,Response, urlencoded} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import {consultaApi} from './models/Cep';
import IndexRoutes from './routes/index';

dotenv.config();
const server = express();

server.set('view engine','mustache');
server.engine('mustache',mustache());



server.use(express.static(path.join(__dirname,'../public')));
server.set('views',path.join(__dirname,'views'));

server.use(urlencoded({extended:true}));

server.use(IndexRoutes);


server.listen(process.env.SERVER_PORT);