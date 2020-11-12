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
        this.router.get('/', cursoController.getPensum);
    }
}

const cursosruotes = new cursosRoutes();
export default cursosruotes.router;