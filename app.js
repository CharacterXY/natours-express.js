import express from 'express';
import morgan from 'morgan';

import { router as tourRouter } from './routes/tourRoutes.js';
import { router as userRouter } from './routes/userRoutes.js';

const app = express();
// Moramo imati nekakav middlewere izmedu clienta i servera inace cemo dobit undefiend iz bodya.

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES Ovdje ih montiramo mounts nase rutere u glavni app
// Inace ovaj app.js fajl se najvise koristi za middleware

app.use('/api/v1/tours', tourRouter); // Za ovu rutu zelimo upotrjebiti tourRouter middleware
app.use('/api/v1/users', userRouter); // Za ovu rutu zelimo upotrjebiti userRouter middleware

export default app;
