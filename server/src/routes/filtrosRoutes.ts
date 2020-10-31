import { Router } from 'express';
import FiltroController from  '../controllers/FiltroController';

class FiltrosRoutes {
    public router: Router = Router();
    
    constructor(){
        this.config();
    }
    
    config(): void{
        //RUTAS PARA FILTROS
        this.router.get('/Curso/', FiltroController.listarCurso);
        this.router.get('/Catedratico/', FiltroController.listarCatedratico);
        this.router.get('/Catedratico/Nombre/:id', FiltroController.listarCatedraticoNombre);
        this.router.get('/Curso/Nombre/:id', FiltroController.listarCursoNombre);
    }
}

const filtrosRoutes = new FiltrosRoutes();
export default filtrosRoutes.router;