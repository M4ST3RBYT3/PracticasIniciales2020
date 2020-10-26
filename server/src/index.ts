import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Rutas para acceder a las vistas
import indexRoutes from './routes/indexRoutes';
//Rutas para consultas
import appsRoutes from './routes/appsRoutes'; 
import publicacionesRoutes from './routes/publicacionesRoutes'; 
import consultasPublicacionesRoutes from './routes/consultaPublicacionRoutes';
import { userInfo } from 'os';

class Server{
    // inicializar express
    
    public app: Application; 
    
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    // CONFIGURAR LA PROPIEDAD DEL APP
    config(): void {
        this.app.set('port', process.env.PORT ||3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());           //Para entender los comandos .json
        this.app.use(express.urlencoded({extended: false}));
    }
    //definir las rutas
    routes(): void{
        this.app.use('/' ,indexRoutes);
        this.app.use('/api/apps',appsRoutes);       //Prefijo para indicar la ruta inicial donde se usará
        this.app.use('/api/Publicacion', publicacionesRoutes);
        this.app.use('/api/Extra', consultasPublicacionesRoutes);
    }
    //iniciar el servidor, que el servidor escuche
    start(): void{
        this.app.listen(this.app.get('port'), () => {//MENSAJE CUANDO TODO A INICIADO
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();