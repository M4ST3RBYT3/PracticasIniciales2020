"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosaprobadosController_1 = __importDefault(require("../controllers/cursosaprobadosController"));
class CursosaprobadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', cursosaprobadosController_1.default.create);
        this.router.get('/:Carnet', cursosaprobadosController_1.default.getCursoAprobado);
    }
}
const cursosaprobadosroutes = new CursosaprobadosRoutes();
exports.default = cursosaprobadosroutes.router;
