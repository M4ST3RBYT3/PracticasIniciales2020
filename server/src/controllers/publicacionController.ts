import {Request, Response} from 'express';
import pool from '../database';
import appsController from './appController';

class PublicacionController{
    // CONSULTAS PARA LA TABLA DE PUBLICACIONES

    public async listarPublicaciones(req: Request, res: Response) {
        const usuario = await pool.query('SELECT * FROM publicacion');
        res.json(usuario);
    }

    public async getPublicacion(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const usuario = await pool.query('SELECT * FROM publicacion WHERE idPublicacion = ?', [id]);
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
