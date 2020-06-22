"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
function calcCircleArea(radiu) {
    var pi = 3.14;
    return pi * (Math.pow(radiu, 2));
}
function start() {
    var radius = readline_sync_1.default.questionInt('radius: ');
    console.log("result: " + calcCircleArea(radius));
}
exports.default = start;
