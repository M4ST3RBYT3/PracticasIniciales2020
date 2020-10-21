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
        this.router.get('/', appController_1.default.index);
    }
}
const appsRoutes = new AppsRoutes();
exports.default = appsRoutes.router;
