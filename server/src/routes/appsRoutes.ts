import { Router } from 'express';
import appsController from '../controllers/appController';

class AppsRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    //Usa la propiedad router, definiendo ruta inicial
    config(): void{
        this.router.get('/', appsController.index);
    }
}

const appsRoutes = new AppsRoutes();
export default appsRoutes.router;