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
class FiltroController {
    // CONSULTAS PARA LA TABLA DE PUBLICACIONES
    // CATEDRATICO -> 2, CURSO -> 3
    listarCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publicaciones = yield database_1.default.query('SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre ' +
                'FROM publicacion ' +
                'LEFT JOIN curso on curso.CodigoCurso = publicacion.Curso_CodigoCurso ' +
                'LEFT JOIN catedratico on catedratico.NoCatedratico = publicacion.Catedratico_NoCatedratico ' +
                'WHERE publicacion.Tipo = 2 ');
            res.json(publicaciones);
        });
    }
    listarCatedratico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publicaciones = yield database_1.default.query('SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre ' +
                'FROM publicacion ' +
                'LEFT JOIN curso on curso.CodigoCurso = publicacion.Curso_CodigoCurso ' +
                'LEFT JOIN catedratico on catedratico.NoCatedratico = publicacion.Catedratico_NoCatedratico ' +
                'WHERE publicacion.Tipo = 3 ');
            res.json(publicaciones);
        });
    }
    listarCatedraticoNombre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre ' +
                'FROM publicacion ' +
                'LEFT JOIN curso on curso.CodigoCurso = publicacion.Curso_CodigoCurso ' +
                'LEFT JOIN catedratico on catedratico.NoCatedratico = publicacion.Catedratico_NoCatedratico ' +
                'WHERE  catedratico.Apellidos = \'' + id + '\'' +
                ' UNION ' +
                'SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre ' +
                'FROM publicacion ' +
                'LEFT JOIN curso_catedratico on curso_catedratico.idCatedraticoCurso = publicacion.Curso_Catedratico_idCatedraticoCurso ' +
                'LEFT JOIN curso on curso.CodigoCurso = curso_catedratico.Curso_CodigoCurso ' +
                'LEFT JOIN catedratico on catedratico.NoCatedratico = curso_catedratico.Catedratico_NoCatedratico ' +
                'WHERE catedratico.Apellidos = \'' + id + '\'');
            res.json(usuario);
        });
    }
    listarCursoNombre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre ' +
                'FROM publicacion ' +
                'LEFT JOIN curso on curso.CodigoCurso = publicacion.Curso_CodigoCurso ' +
                'LEFT JOIN catedratico on catedratico.NoCatedratico = publicacion.Catedratico_NoCatedratico ' +
                'WHERE curso.Nombre = ' + id +
                ' UNION ' +
                'SELECT publicacion.idPublicacion, publicacion.Usuario_Carnet, publicacion.Mensaje, publicacion.Fecha, catedratico.Nombres, catedratico.Apellidos, curso.Nombre ' +
                'FROM publicacion ' +
                'LEFT JOIN curso_catedratico on curso_catedratico.idCatedraticoCurso = publicacion.Curso_Catedratico_idCatedraticoCurso ' +
                'LEFT JOIN curso on curso.CodigoCurso = curso_catedratico.Curso_CodigoCurso ' +
                'LEFT JOIN catedratico on catedratico.NoCatedratico = curso_catedratico.Catedratico_NoCatedratico ' +
                'WHERE curso.CodigoCurso = ' + id);
            res.json(usuario);
        });
    }
}
const filtrosController = new FiltroController();
exports.default = filtrosController;
