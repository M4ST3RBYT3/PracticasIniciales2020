"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //Usa la propiedad router, definiendo ruta inicial
    config() {
        this.router.get('/', (req, res) => res.send('hi there!'));
    }
}
const indexroute = new IndexRoutes();
exports.default = indexroute.router;
