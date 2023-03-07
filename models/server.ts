import express, { Application } from 'express';
import cors from 'cors';
import router from '../routes';
import dbConnection from '../database/config';

class Server {
    
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        //DB connection
        this.dbConnection();
        //Middlewares

        this.routes();
        //Routes

        this.middlewares();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        //Body parsing
        this.app.use( express.json() );
    }

    async dbConnection() {
        await dbConnection();
    }

    routes() {
        this.app.use( '/', router )
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port} 🚀`);
        });
    }
}

export default Server;