"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosRestantesController_1 = __importDefault(require("../controllers/cursosRestantesController"));
class CursosRestantesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:Carnet', cursosRestantesController_1.default.getCursosRestantes);
    }
}
const cursosrestantesRoutes = new CursosRestantesRoutes();
exports.default = cursosrestantesRoutes.router;
