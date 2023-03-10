import dontenv from 'dotenv';
import Server from './models/server';

//Config dontenv
dontenv.config();

const server = new Server();

server.listen();
