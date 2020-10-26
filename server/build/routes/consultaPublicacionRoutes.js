"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultaPublicacionController_1 = __importDefault(require("../controllers/consultaPublicacionController"));
class ConsultaPublicacionController {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //RUTAS PARA CONSULTAR ELEMENTOS EXTRAS EN PUBLICACIOENS
        this.router.get('/Curso/:id', consultaPublicacionController_1.default.getCodigoCurso);
        this.router.get('/Catedratico/:id2', consultaPublicacionController_1.default.getNoCatedratico);
        this.router.get('/CatedraticoCurso/:id3', consultaPublicacionController_1.default.getIdCatedraticoCurso);
    }
}
const cPublicacionRoutes = new ConsultaPublicacionController();
exports.default = cPublicacionRoutes.router;
