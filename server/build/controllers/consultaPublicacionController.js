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
            const { id } = req.params;
            const curso = yield database_1.default.query('SELECT CodigoCurso FROM curso WHERE Nombre = ?', [id]);
            if (curso.length > 0) {
                return res.json(curso[0]);
            }
            res.status(404).json({ text: 'El curso no existe' });
        });
    }
    getNoCatedratico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id2 } = req.params;
            const curso = yield database_1.default.query('SELECT NoCatedratico FROM catedratico WHERE Nombres = ?', [id2]);
            if (curso.length > 0) {
                return res.json(curso[0]);
            }
            res.status(404).json({ text: 'El catedratico no existe' });
        });
    }
    getIdCatedraticoCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id3 } = req.params;
            var entrada = id3.split("", 2);
            const catedraticoCurso = yield database_1.default.query('SELECT idCatedraticoCurso FROM curso_catedratico WHERE Curso_CodigoCurso = ? AND Catedratico_NoCatedratico = ?', [entrada[0], entrada[1]]);
            if (catedraticoCurso.length > 0) {
                return res.json(catedraticoCurso[0]);
            }
            res.status(404).json({ text: 'El id de catedratico en un curso no existe' });
        });
    }
}
const consultasPublicacionesController = new ConsultaPublicacionController();
exports.default = consultasPublicacionesController;
