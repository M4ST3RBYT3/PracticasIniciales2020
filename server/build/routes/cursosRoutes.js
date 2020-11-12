"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosController_1 = __importDefault(require("../controllers/cursosController"));
class cursosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //RUTAS PARA PUBLICACIONES
        this.router.post('/', cursosController_1.default.create);
        this.router.get('/', cursosController_1.default.getPensum);
    }
}
const cursosruotes = new cursosRoutes();
exports.default = cursosruotes.router;
