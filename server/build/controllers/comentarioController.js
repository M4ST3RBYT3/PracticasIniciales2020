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
class ComentarioController {
    // CONSULTAS PARA LA TABLA DE COMENTARIOS
    listarComentarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('select * from comentario where Publicacion_idPublicacion = ?', id);
            res.json(usuario);
        });
    }
    agregarComentario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into comentario set ?', [req.body]);
            res.json({ message: 'Publicacion creada' });
        });
    }
}
const comentariosController = new ComentarioController();
exports.default = comentariosController;
