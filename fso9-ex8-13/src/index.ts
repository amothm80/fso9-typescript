import express from 'express';
import cors from 'cors';
// import morgan from 'morgan'
const app = express();
app.use(express.json());
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';
// app.use(morgan('dev'))
// app.options('/api/ping',cors());
app.use(cors());
const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses',diagnosesRouter);
app.use('/api/patients',patientsRouter);


// app.get('/api/patients',cors(), (_req, res) => {
//   console.log('someone requested patients here');
//   res.send('pong');
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
