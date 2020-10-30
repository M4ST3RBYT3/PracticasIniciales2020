import {Request, Response} from 'express';
import pool from '../database';

class ConsultaPublicacionController{
    public async getCodigoCurso(req: Request, res: Response): Promise<any>{
        const curso = await pool.query('SELECT * FROM curso');
        res.json(curso);
    }
    
    public async getNoCatedratico(req: Request, res: Response): Promise<any>{
        const catedratico = await pool.query('SELECT * FROM catedratico');
        return res.json(catedratico);
    }
    
    public async getIdCatedraticoCurso(req: Request, res: Response): Promise<any>{
        const catedraticoCurso = await pool.query('SELECT curso_catedratico.idCatedraticoCurso, curso.Nombre, catedratico.Nombres, catedratico.Apellidos FROM ((curso_catedratico INNER JOIN curso on curso_catedratico.Curso_CodigoCurso = curso.CodigoCurso)INNER JOIN catedratico on curso_catedratico.Catedratico_NoCatedratico = catedratico.NoCatedratico)');      
        res.json(catedraticoCurso);
    }
}

const consultasPublicacionesController = new ConsultaPublicacionController();
export default consultasPublicacionesController;
