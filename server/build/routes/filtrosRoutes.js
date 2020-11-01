"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FiltroController_1 = __importDefault(require("../controllers/FiltroController"));
class FiltrosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //RUTAS PARA FILTROS
        this.router.get('/Curso/', FiltroController_1.default.listarCurso);
        this.router.get('/Catedratico/', FiltroController_1.default.listarCatedratico);
        this.router.get('/Catedratico/Nombre/:id', FiltroController_1.default.listarCatedraticoNombre);
        this.router.get('/Curso/Nombre/:id', FiltroController_1.default.listarCursoNombre);
    }
}
const filtrosRoutes = new FiltrosRoutes();
exports.default = filtrosRoutes.router;
