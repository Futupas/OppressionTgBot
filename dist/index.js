"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Telegraf } = require('telegraf');
var express_1 = __importDefault(require("express"));
var telegraf_1 = __importDefault(require("telegraf"));
var bot = new telegraf_1.default.Telegraf(process.env.BOT_KEY);
var app = express_1.default();
var PORT = 8000;
app.get('/', function (req, res) { return res.send('Express + TypeScript Server'); });
app.listen(PORT, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:" + PORT);
});
// let c = new Class1();
// const express = require('express');
// const app = express();
// const PORT = 8080;
// app.use(express.static('www'));
// app.listen(PORT, () => {
//     console.log(`Server started at http://localhost:${ PORT }`);
// });
//# sourceMappingURL=index.js.map