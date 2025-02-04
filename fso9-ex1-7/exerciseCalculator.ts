interface TrainingResults {
  numberOfDays: number;
  numberOfTrainingDays: number;
  originalTargetValue: number;
  trainingHours: number;
  calculatedAverageTime: number;
  targetReached: boolean;
  rating: number;
  ratingDescription: string;
}

export interface exData {
  targetDays: number;
  exerciseDays: number[];
}

export const validateInput = (exerciseDays: any, targetDays: any): exData => {
  if (!Array.isArray(exerciseDays)) {
    throw new Error('incorrect exercise days submission');
  }
  exerciseDays.forEach((el) => {
    if (isNaN(Number(el))) {
      throw new Error('incorrect exercise days content submission');
    }
  });

  if (!targetDays || isNaN(Number(targetDays))) {
    throw new Error('incorrect target days submission');
  }

  return {
    exerciseDays: exerciseDays as number[],
    targetDays: targetDays as number,
  };
};

// const parseExArguments = (args: string[]): exData => {
//   if (args.length < 4) throw new Error("not enough arguments");

//   if (isNaN(Number(args[2]))) {
//     throw new Error("provided values were not numbers");
//   }
//   const target = Number(args[2]);
//   const exDays = [];
//   for (let day = 3; day < args.length; day++) {
//     if (isNaN(Number(args[day]))) {
//       throw new Error("provided values were not numbers");
//     }
//     exDays.push(Number(args[day]));
//   }
//   return { targetDays: target, exerciseDays: exDays };
// };

export function calculateExercises(
  dailyExerciseHours: number[],
  target: number
): TrainingResults {
  const numberOfDays = dailyExerciseHours.length;
  const numberOfTrainingDays = dailyExerciseHours.reduce((prev, curr) => {
    if (curr > 0) {
      return prev + 1;
    } else {
      return prev;
    }
  }, 0);
  const originalTargetValue = target;
  const trainingHours = dailyExerciseHours.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  const calculatedAverageTime = trainingHours / numberOfDays;
  const targetReached =
    calculatedAverageTime >= originalTargetValue ? true : false;
  const rating = calculatedAverageTime / originalTargetValue > 1 ? 3 : 1;
  const ratingDescription = rating == 3 ? 'excellent' : 'can do better';

  return {
    numberOfDays: numberOfDays,
    numberOfTrainingDays: numberOfTrainingDays,
    originalTargetValue: originalTargetValue,
    trainingHours: trainingHours,
    calculatedAverageTime: calculatedAverageTime,
    targetReached: targetReached,
    rating: rating,
    ratingDescription: ratingDescription,
  };
}

// try {
//   const exerciseData = parseExArguments(process.argv);
//   console.log(
//     calculateExercises(exerciseData.exerciseDays, exerciseData.targetDays)
//   );
// } catch (error: unknown) {
//   if (error instanceof Error) {
//     console.log("ERROR" + error);
//   }
// }
