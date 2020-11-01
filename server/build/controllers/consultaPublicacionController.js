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
class ConsultaPublicacionController {
    getCodigoCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const curso = yield database_1.default.query('SELECT * FROM curso');
            res.json(curso);
        });
    }
    getNoCatedratico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const catedratico = yield database_1.default.query('SELECT * FROM catedratico');
            return res.json(catedratico);
        });
    }
    getIdCatedraticoCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const catedraticoCurso = yield database_1.default.query('SELECT curso_catedratico.idCatedraticoCurso, curso.Nombre, catedratico.Nombres, catedratico.Apellidos FROM ((curso_catedratico INNER JOIN curso on curso_catedratico.Curso_CodigoCurso = curso.CodigoCurso)INNER JOIN catedratico on curso_catedratico.Catedratico_NoCatedratico = catedratico.NoCatedratico)');
            res.json(catedraticoCurso);
        });
    }
}
const consultasPublicacionesController = new ConsultaPublicacionController();
exports.default = consultasPublicacionesController;
