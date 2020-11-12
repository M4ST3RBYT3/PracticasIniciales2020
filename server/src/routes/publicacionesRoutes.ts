import { Router } from 'express';
import publicacionesController from  '../controllers/publicacionController';

class PublicacionesRoutes {
    public router: Router = Router();
    
    constructor(){
        this.config();
    }
    
    config(): void{
        //RUTAS PARA PUBLICACIONES
        this.router.get('/', publicacionesController.listarPublicaciones);
        this.router.get('/:id', publicacionesController.getPublicacion);
        this.router.post('/', publicacionesController.createPublicacion);
        this.router.get('/Comentario/:id', publicacionesController.getComentarios)
    }
}

const publicacionesRoutes = new PublicacionesRoutes();
export default publicacionesRoutes.router;