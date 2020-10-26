import { Router } from 'express';
import consultasPublicacionController from '../controllers/consultaPublicacionController';

class ConsultaPublicacionController{
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        //RUTAS PARA CONSULTAR ELEMENTOS EXTRAS EN PUBLICACIOENS
        this.router.get('/Curso/:id', consultasPublicacionController.getCodigoCurso)
        this.router.get('/Catedratico/:id2', consultasPublicacionController.getNoCatedratico)
        this.router.get('/CatedraticoCurso/:id3', consultasPublicacionController.getIdCatedraticoCurso)
    }
}

const cPublicacionRoutes = new ConsultaPublicacionController();
export default cPublicacionRoutes.router;