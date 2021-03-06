import { Router } from 'express';
import cursosaprobadosController from '../controllers/cursosaprobadosController';

class CursosaprobadosRoutes {
    public router: Router = Router();
    
    constructor(){
        this.config();
    }
    
    config(): void{

        this.router.post('/', cursosaprobadosController.create);
        this.router.get('/:Carnet', cursosaprobadosController.getCursoAprobado);
    
    }
}

const cursosaprobadosroutes = new CursosaprobadosRoutes();
export default cursosaprobadosroutes.router;