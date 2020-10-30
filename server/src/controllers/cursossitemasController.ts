import {Request, Response} from 'express';
import pool from '../database';

class CursossistemasController{

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('insert into PensumSistemas set ?', [req.body]);
        res.json({message: 'Curso Ingresado'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE PensumSistemas set ? where Carnet = ?', [req.body, id]);
        res.json({message: 'Usuario actualizado'});
    }

}

const cursossistemasController = new CursossistemasController();
export default cursossistemasController;