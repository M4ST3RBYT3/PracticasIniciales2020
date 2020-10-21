import { Router } from 'express';

class AppsRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    //Usa la propiedad router, definiendo ruta inicial
    config(): void{
        this.router.get('/', (req,res) => res.send('APP'));
    }
}

const appsRoutes = new AppsRoutes();
export default appsRoutes.router;