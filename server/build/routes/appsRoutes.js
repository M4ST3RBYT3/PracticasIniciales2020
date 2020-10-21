"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AppsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //Usa la propiedad router, definiendo ruta inicial
    config() {
        this.router.get('/', (req, res) => res.send('APP'));
    }
}
const appsRoutes = new AppsRoutes();
exports.default = appsRoutes.router;
