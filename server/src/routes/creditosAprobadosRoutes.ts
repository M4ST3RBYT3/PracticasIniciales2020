import { Router } from 'express';
import creditosAprobadosController from '../controllers/creditosAprobadosController';

class creditosAprobadosRoutes {
    public router: Router = Router();
    
    constructor(){
        this.config();
    }
    
    config(): void{
        this.router.get('/:Carnet', creditosAprobadosController.getCreditos );
    
    }
}

const creditosaprobadosroutes = new creditosAprobadosRoutes();
export default creditosaprobadosroutes.router;