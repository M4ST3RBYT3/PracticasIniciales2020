"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const creditosAprobadosController_1 = __importDefault(require("../controllers/creditosAprobadosController"));
class creditosAprobadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:Carnet', creditosAprobadosController_1.default.getCreditos);
    }
}
const creditosaprobadosroutes = new creditosAprobadosRoutes();
exports.default = creditosaprobadosroutes.router;
