import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    //Usa la propiedad router, definiendo ruta inicial
    config(): void{
        this.router.get('/', indexController.index);
    }
}

const indexroute = new IndexRoutes();
export default indexroute.router;