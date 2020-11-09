import { Router } from 'express';
import cursossistemasController from '../controllers/editarusuController';

class EditarusuRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.put('/:Carnet', cursossistemasController.update);
    }
}

const editRoutes = new EditarusuRoutes();
export default editRoutes.router;