"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //Usa la propiedad router, definiendo ruta inicial
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexroute = new IndexRoutes();
exports.default = indexroute.router;
