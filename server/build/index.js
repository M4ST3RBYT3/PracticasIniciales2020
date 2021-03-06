"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Rutas para acceder a las vistas
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
//Rutas para consultas
const appsRoutes_1 = __importDefault(require("./routes/appsRoutes"));
const publicacionesRoutes_1 = __importDefault(require("./routes/publicacionesRoutes"));
const consultaPublicacionRoutes_1 = __importDefault(require("./routes/consultaPublicacionRoutes"));
const comentariosRoutes_1 = __importDefault(require("./routes/comentariosRoutes"));
const filtrosRoutes_1 = __importDefault(require("./routes/filtrosRoutes"));
const cursosAprobadosRoutes_1 = __importDefault(require("./routes/cursosAprobadosRoutes"));
const cursosRoutes_1 = __importDefault(require("./routes/cursosRoutes"));
const creditosAprobadosRoutes_1 = __importDefault(require("./routes/creditosAprobadosRoutes"));
const cursosRestantesRoutes_1 = __importDefault(require("./routes/cursosRestantesRoutes"));
//import from './routes/'
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    // CONFIGURAR LA PROPIEDAD DEL APP
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); //Para entender los comandos .json
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //definir las rutas
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/apps', appsRoutes_1.default); //Prefijo para indicar la ruta inicial donde se usará
        this.app.use('/api/Publicacion', publicacionesRoutes_1.default);
        this.app.use('/api/Extra', consultaPublicacionRoutes_1.default);
        this.app.use('/api/Comentarios', comentariosRoutes_1.default);
        this.app.use('/api/Filtros', filtrosRoutes_1.default);
        this.app.use('/api/Cursos', cursosRoutes_1.default);
        this.app.use('/api/CursosAprobados', cursosAprobadosRoutes_1.default);
        this.app.use('/api/CreditosAprobados', creditosAprobadosRoutes_1.default);
        this.app.use('/api/CursosRestantes', cursosRestantesRoutes_1.default);
    }
    //iniciar el servidor, que el servidor escuche
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
