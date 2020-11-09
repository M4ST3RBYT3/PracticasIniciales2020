"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursossitemasController_1 = __importDefault(require("../controllers/cursossitemasController"));
class cursossitemasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //RUTAS PARA PUBLICACIONES
        this.router.post('/', cursossitemasController_1.default.create);
        this.router.put('/:id', cursossitemasController_1.default.update);
    }
}
const cursossitemasroutes = new cursossitemasRoutes();
exports.default = cursossitemasroutes.router;
