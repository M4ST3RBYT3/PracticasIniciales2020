import {Request, Response} from 'express';
import pool from '../database';

class PublicacionController{
    // CONSULTAS PARA LA TABLA DE PUBLICACIONES

    public async listarPublicaciones(req: Request, res: Response) {
        const usuario = await pool.query('SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre '+
        'FROM publicacion '+
        'LEFT JOIN curso on curso.CodigoCurso = publicacion.Curso_CodigoCurso '+
        'LEFT JOIN catedratico on catedratico.NoCatedratico = publicacion.Catedratico_NoCatedratico '+
        'WHERE publicacion.Tipo = 2 or publicacion.Tipo = 3 '+
        'UNION '+
        'SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre '+
        'FROM publicacion '+
        'LEFT JOIN curso_catedratico on curso_catedratico.idCatedraticoCurso = publicacion.Curso_Catedratico_idCatedraticoCurso '+
        'LEFT JOIN curso on curso.CodigoCurso = curso_catedratico.Curso_CodigoCurso '+
        'LEFT JOIN catedratico on catedratico.NoCatedratico = curso_catedratico.Catedratico_NoCatedratico '+
        'WHERE publicacion.Tipo = 1 ');
        res.json(usuario);
    }

    public async getPublicacion(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const usuario = await pool.query('SELECT publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre FROM publicacion LEFT JOIN curso on curso.CodigoCurso = publicacion.Curso_CodigoCurso LEFT JOIN catedratico on catedratico.NoCatedratico = publicacion.Catedratico_NoCatedratico WHERE (publicacion.Tipo = 2 or publicacion.Tipo = 3) and publicacion.idPublicacion = ' + id.toString() + ' UNION SELECT publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre FROM publicacion LEFT JOIN curso_catedratico on curso_catedratico.idCatedraticoCurso = publicacion.Curso_Catedratico_idCatedraticoCurso LEFT JOIN curso on curso.CodigoCurso = curso_catedratico.Curso_CodigoCurso LEFT JOIN catedratico on catedratico.NoCatedratico = curso_catedratico.Catedratico_NoCatedratico WHERE publicacion.Tipo = 1 and publicacion.idPublicacion = ' + id.toString());
        if (usuario.length > 0) {
            return res.json(usuario[0]);
        }
        res.status(404).json({ text: 'La publicacion no existe' });
    }

    public async createPublicacion(req: Request, res: Response): Promise<void> {
        await pool.query('insert into publicacion set ?', [req.body]);
        res.json({ message: 'Publicacion creada' });
    }
}

const publicacionesController = new PublicacionController();
export default publicacionesController;
