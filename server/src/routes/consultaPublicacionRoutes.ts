import { Router } from 'express';
import consultasPublicacionController from '../controllers/consultaPublicacionController';

class ConsultaPublicacionController{
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        //RUTAS PARA CONSULTAR ELEMENTOS EXTRAS EN PUBLICACIOENS
        this.router.get('/Curso', consultasPublicacionController.getCodigoCurso)
        this.router.get('/Catedratico', consultasPublicacionController.getNoCatedratico)
        this.router.get('/CatedraticoCurso', consultasPublicacionController.getIdCatedraticoCurso)
    }
}

const cPublicacionRoutes = new ConsultaPublicacionController();
export default cPublicacionRoutes.router;