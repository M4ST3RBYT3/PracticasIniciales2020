import { Router } from 'express';
import comentariosController from  '../controllers/comentarioController';

class ComentariosRoutes {
    public router: Router = Router();
    
    constructor(){
        this.config();
    }
    
    config(): void{
        //RUTAS PARA PUBLICACIONES
        this.router.get('/:id', comentariosController.listarComentarios);
        this.router.post('/', comentariosController.agregarComentario);
    }
}

const comentariosRoutes = new ComentariosRoutes();
export default comentariosRoutes.router;