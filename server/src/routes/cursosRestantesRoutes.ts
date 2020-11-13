import { Router } from 'express';
import cursosrestantesController from '../controllers/cursosRestantesController';


class CursosRestantesRoutes {
    public router: Router = Router();
    
    constructor(){
        this.config();
    }
    
    config(): void{

        this.router.get('/:Carnet', cursosrestantesController.getCursosRestantes);
    
    }
}

const cursosrestantesRoutes = new CursosRestantesRoutes();
export default cursosrestantesRoutes.router;