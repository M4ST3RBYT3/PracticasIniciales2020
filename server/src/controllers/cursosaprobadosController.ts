import {Request, Response} from 'express';
import pool from '../database';

class CursosAprobadosController{

    public async create(req: Request, res: Response): Promise<void>{

        await pool.query('INSERT INTO  CursosAprobados set  ?', [req.body]);
        res.json({message: 'Curso Ingresado'});
    
    }

    public async getCursoAprobado(req: Request, res: Response){
        const { Carnet } = req.params;
        await pool.query('SELECT * FROM CursosAprobados WHERE CarnetU = ?', [req.body,Carnet]);
        //await pool.query('UPDATE Usuario set ? where Carnet = ?', [req.body, Carnet]);
        //res.json(curso);
        res.json({message: 'Curso OK'});
    }

    //SELECT curso.CodigoCurso, curso.Nombre, pensumsistemas.idCursoPensum
    //FROM pensumsistemas
    //INNER JOIN curso on curso.CodigoCurso = pensumsistemas.Curso_CodigoCurso
}

const cursosaprobadosController = new CursosAprobadosController();
export default cursosaprobadosController;