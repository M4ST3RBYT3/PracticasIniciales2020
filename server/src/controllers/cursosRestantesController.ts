import {Request, Response} from 'express';
import pool from '../database';

class CursosRestantesController{

    public async getCursosRestantes(req: Request, res: Response){
        const { Carnet } = req.params;
        const curso = await pool.query('SELECT cursosaprobados.*, curso.* FROM cursosaprobados  RIGHT JOIN curso  ON cursosaprobados.CursoP=curso.CodigoCurso  WHERE cursosaprobados.CursoP is null');
        res.json(curso);
       
    }
    //SELECT curso.CodigoCurso, curso.Nombre
    //FROM pensumsistemas
    //RIGHT JOIN CursosAprobados on CursosAprobados.CursoP = pensumsistemas.Curso_CodigoCurso

    //SELECT Curso.Nombre, Curso.CodigoCurso
    //FROM CursosAprobados RIGHT JOIN Cursos
    //ON CursosAprobados.CursoP = Curso.CodigoCurso

    //SELECT Curso.Nombre, Curso.CodigoCurso
    //FROM Curso
    //RIGHT JOIN 
    //ON Curso.CodigoCurso = CursosAprobados.CursoP WHERE CursosAprobados.Curos IS NULL

    //SI SIRVE
    //SELECT curso.*, cursosaprobados.* FROM curso 
    //RIGHT JOIN cursosaprobados 
    //ON curso.CodigoCurso = cursosaprobados.CursoP
    //WHERE curso.CodigoCurso is null

    //Si sirve 2
    //SELECT cursosaprobados.*, curso.*
    //FROM cursosaprobados 
    //RIGHT JOIN curso 
    //ON cursosaprobados.CursoP=curso.CodigoCurso 
    //WHERE cursosaprobados.CursoP is null 

    //Si sirve 2 x2
    //SELECT curso.nombre, curso.CodigoCurso
    //FROM cursosaprobados 
    //RIGHT JOIN curso 
    //ON cursosaprobados.CursoP=curso.CodigoCurso 
    //WHERE cursosaprobados.CursoP is null AND WHERE cursosaprobados.CarnetU = 201904025


}

const cursosrestantesController = new CursosRestantesController();
export default cursosrestantesController;