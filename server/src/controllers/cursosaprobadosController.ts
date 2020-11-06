import {Request, Response} from 'express';
import pool from '../database';

class CursosAprobadosController{

    public async create(req: Request, res: Response): Promise<void>{

        await pool.query('INSERT INTO  CursosAprobados set  ?', [req.body]);
        res.json({message: 'Curso Ingresado'});
    }

}

const cursosaprobadosController = new CursosAprobadosController();
export default cursosaprobadosController;