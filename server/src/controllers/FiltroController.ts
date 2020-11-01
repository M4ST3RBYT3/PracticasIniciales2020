import {Request, Response} from 'express';
import pool from '../database';

class FiltroController{
    // CONSULTAS PARA LA TABLA DE PUBLICACIONES
    // CATEDRATICO -> 2, CURSO -> 3
    public async listarCurso(req: Request, res: Response) {
        const publicaciones = await pool.query('SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre '+
        'FROM publicacion '+
        'LEFT JOIN curso on curso.CodigoCurso = publicacion.Curso_CodigoCurso '+
        'LEFT JOIN catedratico on catedratico.NoCatedratico = publicacion.Catedratico_NoCatedratico '+
        'WHERE publicacion.Tipo = 2 ');
        res.json(publicaciones);
    }

    public async listarCatedratico(req: Request, res: Response) {
        const publicaciones = await pool.query('SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre '+
        'FROM publicacion '+
        'LEFT JOIN curso on curso.CodigoCurso = publicacion.Curso_CodigoCurso '+
        'LEFT JOIN catedratico on catedratico.NoCatedratico = publicacion.Catedratico_NoCatedratico '+
        'WHERE publicacion.Tipo = 3 ');
        res.json(publicaciones);
    }
    
    public async listarCatedraticoNombre(req: Request, res: Response) {
        const { id } = req.params;
        const usuario = await pool.query('SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre '+
        'FROM publicacion '+
        'LEFT JOIN curso on curso.CodigoCurso = publicacion.Curso_CodigoCurso '+
        'LEFT JOIN catedratico on catedratico.NoCatedratico = publicacion.Catedratico_NoCatedratico '+
        'WHERE  catedratico.Apellidos = \'' + id + '\''+
        ' UNION '+
        'SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre '+
        'FROM publicacion '+
        'LEFT JOIN curso_catedratico on curso_catedratico.idCatedraticoCurso = publicacion.Curso_Catedratico_idCatedraticoCurso '+
        'LEFT JOIN curso on curso.CodigoCurso = curso_catedratico.Curso_CodigoCurso '+
        'LEFT JOIN catedratico on catedratico.NoCatedratico = curso_catedratico.Catedratico_NoCatedratico '+
        'WHERE catedratico.Apellidos = \'' + id + '\'');
        res.json(usuario);
    }
    
    public async listarCursoNombre(req: Request, res: Response) {
        const { id } = req.params
        const usuario = await pool.query('SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre ' +
        'FROM publicacion '+
        'LEFT JOIN curso on curso.CodigoCurso = publicacion.Curso_CodigoCurso '+
        'LEFT JOIN catedratico on catedratico.NoCatedratico = publicacion.Catedratico_NoCatedratico '+
        'WHERE curso.CodigoCurso = ' + id  + 
        ' UNION '+
        'SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre '+
        'FROM publicacion '+
        'LEFT JOIN curso_catedratico on curso_catedratico.idCatedraticoCurso = publicacion.Curso_Catedratico_idCatedraticoCurso '+
        'LEFT JOIN curso on curso.CodigoCurso = curso_catedratico.Curso_CodigoCurso '+
        'LEFT JOIN catedratico on catedratico.NoCatedratico = curso_catedratico.Catedratico_NoCatedratico '+
        'WHERE curso.CodigoCurso = ' + id);
        res.json(usuario);
    }
    
}

const filtrosController = new FiltroController();
export default filtrosController;
