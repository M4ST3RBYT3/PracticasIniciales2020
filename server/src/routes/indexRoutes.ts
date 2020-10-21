import { Router } from 'express';

class IndexRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    //Usa la propiedad router, definiendo ruta inicial
    config(): void{
        this.router.get('/', (req,res) => res.send('hi there!'));
    }
}

const indexroute = new IndexRoutes();
export default indexroute.router;