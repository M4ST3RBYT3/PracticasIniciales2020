import {Request, Response} from 'express';
import pool from '../database';

class AppController{
    public index(req: Request, res: Response){
        pool.query('DESCRIBE usuario'); 
        res.json('Apps there');
    }
}

const appsController = new AppController();
export default appsController;