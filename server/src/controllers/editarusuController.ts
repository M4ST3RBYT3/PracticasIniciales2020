import {Request, Response} from 'express';
import pool from '../database';

class EditarusuController{



    public async update(req: Request, res: Response): Promise<void> {
        const {Carnet} = req.params;
        await pool.query('UPDATE Usuario set ? where Carnet = ?', [req.body, Carnet]);
        res.json({message: 'Usuario actualizado'});
    }

}

const editarusuaController = new EditarusuController();
export default editarusuaController;