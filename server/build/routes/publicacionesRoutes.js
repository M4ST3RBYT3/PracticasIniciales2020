"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicacionController_1 = __importDefault(require("../controllers/publicacionController"));
class PublicacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //RUTAS PARA PUBLICACIONES
        this.router.get('/', publicacionController_1.default.listarPublicaciones);
        this.router.get('/:id', publicacionController_1.default.getPublicacion);
        this.router.post('/', publicacionController_1.default.createPublicacion);
    }
}
const appsRoutes = new PublicacionesRoutes();
exports.default = appsRoutes.router;
