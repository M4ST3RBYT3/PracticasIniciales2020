import {Request, Response} from 'express';
import pool from '../database';

class CursosController{

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('insert into Curso set ?', [req.body]);
        res.json({message: 'Curso Ingresado'});
    }

}

const cursoController = new CursosController();
export default cursoController;
