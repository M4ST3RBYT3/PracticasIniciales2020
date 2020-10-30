import { Router } from 'express';
import cursoController from '../controllers/cursosController';

class cursosRoutes {
    public router: Router = Router();
    
    constructor(){
        this.config();
    }
    
    config(): void{
        //RUTAS PARA PUBLICACIONES
        this.router.post('/', cursoController.create);
    }
}

const cursosruotes = new cursosRoutes();
export default cursosruotes.router;