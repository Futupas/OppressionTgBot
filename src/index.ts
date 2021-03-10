import { Class1 } from "./Class1";
// const { Telegraf } = require('telegraf');

import express from 'express';
import Telegraf from 'telegraf';

const bot = new Telegraf.Telegraf(process.env.BOT_KEY);

const app = express();
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});



// let c = new Class1();

// const express = require('express');
// const app = express();

// const PORT = 8080;

// app.use(express.static('www'));

// app.listen(PORT, () => {
//     console.log(`Server started at http://localhost:${ PORT }`);
// });
