"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comentarioController_1 = __importDefault(require("../controllers/comentarioController"));
class ComentariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //RUTAS PARA PUBLICACIONES
        this.router.get('/:id', comentarioController_1.default.listarComentarios);
        this.router.post('/', comentarioController_1.default.agregarComentario);
    }
}
const comentariosRoutes = new ComentariosRoutes();
exports.default = comentariosRoutes.router;
