"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appController_1 = __importDefault(require("../controllers/appController"));
class AppsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //Usa la propiedad router, definiendo ruta inicial
    config() {
        //RUTAS PARA TRABAJAR LA TABLA DE USUARIOS
        this.router.get('/', appController_1.default.list);
        this.router.get('/:id', appController_1.default.getOne);
        this.router.post('/', appController_1.default.create);
        this.router.delete('/:id', appController_1.default.delete);
        this.router.put('/:id', appController_1.default.update);
    }
}
const appsRoutes = new AppsRoutes();
exports.default = appsRoutes.router;
