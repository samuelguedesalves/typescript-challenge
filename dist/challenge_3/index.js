"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
function calcTriangleArea(base, height) {
    return ((base * height) / 2);
}
function start() {
    var base = readline_sync_1.default.questionInt('Base: ');
    var height = readline_sync_1.default.questionInt('Height: ');
    console.log("result: " + calcTriangleArea(base, height));
}
exports.default = start;
