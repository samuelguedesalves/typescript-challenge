"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = __importStar(require("readline-sync"));
var index_1 = __importDefault(require("./challenge_1/index"));
var index_2 = __importDefault(require("./challenge_2/index"));
var index_3 = __importDefault(require("./challenge_3/index"));
var index_4 = __importDefault(require("./challenge_4/index"));
var menu = "\n0 - exit\n1 - Minute from Second\n2 - Sum interval\n3 - Area triangle\n4 - Area circle\n>\n";
console.clear();
for (var i = 0; i < 1;) {
    var option = readLineSync.questionInt(menu);
    if (option === 0) {
        console.clear();
        i = 1;
    }
    else if (option === 1) {
        index_1.default();
    }
    else if (option === 2) {
        index_2.default();
    }
    else if (option === 3) {
        index_3.default();
    }
    else if (option === 4) {
        index_4.default();
    }
    else {
        console.clear();
        console.warn('Invalid option!');
    }
}
