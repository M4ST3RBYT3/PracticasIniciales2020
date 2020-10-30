import { Router } from 'express';
import cursossistemasController from '../controllers/cursossitemasController';

class cursossitemasRoutes {
    public router: Router = Router();
    
    constructor(){
        this.config();
    }
    
    config(): void{
        //RUTAS PARA PUBLICACIONES
        this.router.post('/', cursossistemasController.create);
        this.router.put('/:id', cursossistemasController.update)
    }
}

const cursossitemasroutes = new cursossitemasRoutes();
export default cursossitemasroutes.router;