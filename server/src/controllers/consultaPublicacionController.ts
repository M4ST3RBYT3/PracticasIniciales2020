import {Request, Response} from 'express';
import pool from '../database';

class ConsultaPublicacionController{
    public async getCodigoCurso(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const curso = await pool.query('SELECT CodigoCurso FROM curso WHERE Nombre = ?', [id]);
        if (curso.length > 0){
            return res.json(curso[0]);
        }
        res.status(404).json({ text: 'El curso no existe'});
    }
    
    public async getNoCatedratico(req: Request, res: Response): Promise<any>{
        const { id2 } = req.params;
        const curso = await pool.query('SELECT NoCatedratico FROM catedratico WHERE Nombres = ?', [id2]);
        if (curso.length > 0){
            return res.json(curso[0]);
        }
        res.status(404).json({text: 'El catedratico no existe'})  
    }
    
    public async getIdCatedraticoCurso(req: Request, res: Response): Promise<any>{
        const { id3 } = req.params;
        var entrada = id3.split("",2);
        const catedraticoCurso = await pool.query('SELECT idCatedraticoCurso FROM curso_catedratico WHERE Curso_CodigoCurso = ? AND Catedratico_NoCatedratico = ?', [entrada[0], entrada[1]]);      
        if (catedraticoCurso.length > 0){
            return res.json(catedraticoCurso[0]);
        }
        res.status(404).json({text: 'El id de catedratico en un curso no existe'});
    }
}

const consultasPublicacionesController = new ConsultaPublicacionController();
export default consultasPublicacionesController;
