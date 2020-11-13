import {Request, Response} from 'express';
import pool from '../database';

class CursosRestantesController{

    public async getCursosRestantes(req: Request, res: Response){
        const { Carnet } = req.params;
        const curso = await pool.query('SELECT CursosAprobados.NotaAprobada, curso.Nombre, curso.CodigoCurso FROM CursosAprobados INNER JOIN pensumsistemas on pensumsistemas.idCursoPensum = CursosAprobados.CursoP INNER JOIN curso on curso.CodigoCurso = pensumsistemas.Curso_CodigoCurso where CarnetU = 201904025');
        res.json(curso);
       
    }
    //SELECT curso.CodigoCurso, curso.Nombre
    //FROM pensumsistemas
    //RIGHT JOIN CursosAprobados on CursosAprobados.CursoP = pensumsistemas.Curso_CodigoCurso

    //SELECT Curso.Nombre, Curso.CodigoCurso
    //FROM CursosAprobados RIGHT JOIN Cursos
    //ON CursosAprobados.CursoP = Curso.CodigoCurso




}

const cursosrestantesController = new CursosRestantesController();
export default cursosrestantesController;