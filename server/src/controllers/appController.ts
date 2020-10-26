import {Request, Response} from 'express';
import pool from '../database';

class AppController{
    // CONSULTAS PARA LA TABLA USUARIOS
    public async list(req: Request, res: Response){
      const usuario = await pool.query('SELECT * FROM usuario');
      res.json(usuario);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const usuario = await pool.query('SELECT * FROM usuario WHERE Carnet = ?', [id]);
        if (usuario.length > 0){
            return res.json(usuario[0]);
        }
        res.status(404).json({text: 'El usuario no existe'});
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('insert into usuario set ?', [req.body]);
        res.json({message: 'usuario creado'});
    }
    
    public async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM usuario WHERE Carnet = ?', [id]);
        res.json({message: 'Usuario eliminado'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE usuario set ? where Carnet = ?', [req.body, id]);
        res.json({message: 'Usuario actualizado'});
    }
}

const appsController = new AppController();
export default appsController;