import {Request, Response} from 'express';
import pool from '../database';

class ComentarioController{
    // CONSULTAS PARA LA TABLA DE COMENTARIOS

    public async listarComentarios(req: Request, res: Response) {
        const { id } = req.params;
        const usuario = await pool.query('select * from comentario where Publicacion_idPublicacion = ?', id);
        res.json(usuario);
    }

    public async agregarComentario(req: Request, res: Response): Promise<void> {
        await pool.query('insert into comentario set ?', [req.body]);
        res.json({ message: 'Publicacion creada' });
    }
}

const comentariosController = new ComentarioController();
export default comentariosController;