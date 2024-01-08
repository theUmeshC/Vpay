import { Request, Response, NextFunction } from "express";

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req: Request, res : Response, next: NextFunction) => {
  res.send('Welcome to Vpay');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });