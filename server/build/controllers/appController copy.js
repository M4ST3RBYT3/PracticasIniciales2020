"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class AppController {
    // CONSULTAS PARA LA TABLA USUARIOS
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.default.query('SELECT * FROM usuario');
            res.json(usuario);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM usuario WHERE Carnet = ?', [id]);
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            res.status(404).json({ text: 'El usuario no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into usuario set ?', [req.body]);
            res.json({ message: 'usuario creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuario WHERE Carnet = ?', [id]);
            res.json({ message: 'Usuario eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuario set ? where Carnet = ?', [req.body, id]);
            res.json({ message: 'Usuario actualizado' });
        });
    }
}
const appsController = new AppController();
exports.default = appsController;
