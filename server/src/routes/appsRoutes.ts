import { Router } from 'express';
import appsController from '../controllers/appController';

class AppsRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    //Usa la propiedad router, definiendo ruta inicial
    config(): void{
        //RUTAS PARA TRABAJAR LA TABLA DE USUARIOS
        this.router.get('/', appsController.list);
        this.router.get('/:id', appsController.getOne);
        this.router.post('/', appsController.create);
        this.router.delete('/:id', appsController.delete);
        this.router.put('/:id', appsController.update);
    }
}

const appsRoutes = new AppsRoutes();
export default appsRoutes.router;