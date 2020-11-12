import {Request, Response} from 'express';
import pool from '../database';

class CursosController{

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('insert into Curso set ?', [req.body]);
        res.json({message: 'Curso Ingresado'});
    }
    public async getPensum(req: Request, res: Response){
        const curso = await pool.query('SELECT pensumsistemas.idCursoPensum, curso.Nombre, curso.CodigoCurso FROM curso INNER JOIN pensumsistemas on pensumsistemas.Curso_CodigoCurso= curso.CodigoCurso');
        res.json(curso);
    }

    //SELECT pensumsistemas.idCursoPensum, curso.Nombre, curso.CodigoCurso
    //FROM curso
    //INNER JOIN curso on curso.CodigoCurso = pensumsistemas.Curso_CodigoCurso

}

const cursoController = new CursosController();
export default cursoController;
