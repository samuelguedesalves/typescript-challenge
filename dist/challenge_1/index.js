"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
function convertMinutesIntoSeconds(minute) {
    var seconds = minute * 60;
    return seconds;
}
function start() {
    var minute = parseInt(readline_sync_1.default.question('minute: '));
    console.log("result: " + convertMinutesIntoSeconds(minute));
}
exports.default = start;
