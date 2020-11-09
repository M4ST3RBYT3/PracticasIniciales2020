"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const editarusuController_1 = __importDefault(require("../controllers/editarusuController"));
class EditarusuRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/:Carnet', editarusuController_1.default.update);
    }
}
const editRoutes = new EditarusuRoutes();
exports.default = editRoutes.router;
