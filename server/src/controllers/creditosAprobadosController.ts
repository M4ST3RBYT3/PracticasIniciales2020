import {Request, Response} from 'express';
import pool from '../database';

class CreditosAprobadosController{

    public async getCreditos(req: Request, res: Response){
        const { Carnet } = req.params;
        const hola = await pool.query('SELECT SUM(Creditos) AS Creditos FROM cursosaprobados INNER JOIN pensumsistemas on pensumsistemas.idCursoPensum = CursosAprobados.CursoP WHERE CarnetU = '+ Carnet);
        res.json(hola)
    }

}

const creditosAprobadosController = new CreditosAprobadosController();
export default creditosAprobadosController;