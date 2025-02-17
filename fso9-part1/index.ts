import express from 'express';
// const express = require('express')
import { calculator, Operation } from './calculator';
const app = express();

app.get('/ping', (_req, res) => {
  res.send('ponggg');
});

app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;
  if (!value1 || isNaN(Number(value1))) {
    res.status(400).send({ error: '...' });
  }

  const operation = op as Operation;
  const result = calculator(Number(value1), Number(value2), operation);
  res.send({ result });
});
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
