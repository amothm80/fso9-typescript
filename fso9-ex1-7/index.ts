import express from 'express';
import getCalculateBMI from './bmiCalculator';
import {
  validateInput,
  exData,
  calculateExercises,
} from './exerciseCalculator';
const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { height, weight } = req.body;
  try {
    const bmi = getCalculateBMI(height as string, weight as string);
    res.send(
      JSON.stringify({
        weight: req.query.weight,
        height: req.query.height,
        bmi: bmi,
      })
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send('Error: ' + error.message);
    }
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  try {
    const exerciseData: exData = validateInput(daily_exercises, target);
    res.send(
      calculateExercises(exerciseData.exerciseDays, exerciseData.targetDays)
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send({ Message: error.message });
    }
  }
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
