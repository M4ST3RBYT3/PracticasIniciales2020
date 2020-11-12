import {Request, Response} from 'express';
import pool from '../database';

class CursosController{

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('insert into Curso set ?', [req.body]);
        res.json({message: 'Curso Ingresado'});
    }
    public async getPensum(req: Request, res: Response){
        const curso = await pool.query('SELECT * FROM curso');
        res.json(curso);
      }

}

const cursoController = new CursosController();
export default cursoController;
