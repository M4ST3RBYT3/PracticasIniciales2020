import {Request, Response} from 'express';
import pool from '../database';

class CursosAprobadosController{

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO  CursosAprobados set  ?', [req.body]);
        res.json({message: 'Curso Ingresado'});
    
    }

    public async getCursoAprobado(req: Request, res: Response){
        const { Carnet } = req.params;
        const curso = await pool.query('SELECT CursosAprobados.NotaAprobada, curso.Nombre, curso.CodigoCurso FROM CursosAprobados INNER JOIN pensumsistemas on pensumsistemas.idCursoPensum = CursosAprobados.CursoP INNER JOIN curso on curso.CodigoCurso = pensumsistemas.Curso_CodigoCurso where CarnetU = 201904025');
        res.json(curso);
        //await pool.query('UPDATE Usuario set ? where Carnet = ?', [req.body, Carnet]);
        //res.json(curso);
        //res.json({message: 'Curso OK'});
    }

 


    

    //SELECT curso.CodigoCurso, curso.Nombre, pensumsistemas.idCursoPensum
    //FROM pensumsistemas
    //INNER JOIN curso on curso.CodigoCurso = pensumsistemas.Curso_CodigoCurso

    //SELECT CursosAprobados.NotaAprobada, curso.Nombre, curso.CodigoCurso
    //FROM CursosAprobados
    //INNER JOIN pensumsistemas on pensumsistemas.idCursoPensum = CursosAprobados.CursoP
    //INNER JOIN curso on curso.CodigoCurso = pensumsistemas.Curso_CodigoCurso

    //CREDITOS
    //SELECT pensumsistemas.Creditos FROM cursosaprobados INNER JOIN pensumsistemas on pensumsistemas.idCursoPensum = CursosAprobados.CursoP WHERE CarnetU = 201904025

    //Suma Creditos
    //SELECT SUM(Creditos) FROM cursosaprobados INNER JOIN pensumsistemas on pensumsistemas.idCursoPensum = CursosAprobados.CursoP WHERE CarnetU =201904025
    //SELECT SUM(Creditos) AS Creditos FROM cursosaprobados INNER JOIN pensumsistemas on pensumsistemas.idCursoPensum = CursosAprobados.CursoP WHERE CarnetU =201904025
}

const cursosaprobadosController = new CursosAprobadosController();
export default cursosaprobadosController;