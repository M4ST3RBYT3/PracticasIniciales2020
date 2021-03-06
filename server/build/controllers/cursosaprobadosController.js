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
class CursosAprobadosController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO  CursosAprobados set  ?', [req.body]);
            res.json({ message: 'Curso Ingresado' });
        });
    }
    getCursoAprobado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Carnet } = req.params;
            const curso = yield database_1.default.query('SELECT CursosAprobados.NotaAprobada, curso.Nombre, curso.CodigoCurso FROM CursosAprobados INNER JOIN pensumsistemas on pensumsistemas.idCursoPensum = CursosAprobados.CursoP INNER JOIN curso on curso.CodigoCurso = pensumsistemas.Curso_CodigoCurso where CarnetU = ' + Carnet);
            res.json(curso);
        });
    }
}
const cursosaprobadosController = new CursosAprobadosController();
exports.default = cursosaprobadosController;
