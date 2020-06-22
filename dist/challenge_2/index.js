"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
function sumInterval(first, second) {
    var sum = 0;
    if (first > second) {
        for (var i = second; i <= first; i++) {
            sum = i + sum;
        }
    }
    else {
        for (var i = first; i <= second; i++) {
            sum = i + sum;
        }
        return sum;
    }
}
function start() {
    var firstNumber = readline_sync_1.default.questionInt('First number: ');
    var secondNumber = readline_sync_1.default.questionInt('\nSecond number: ');
    console.log("result:" + sumInterval(firstNumber, secondNumber));
}
exports.default = start;
