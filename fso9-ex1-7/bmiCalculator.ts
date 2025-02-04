type BMI = 'Underweight' | 'Normal' | 'Overweight' | 'Obese';

interface Measurements {
  height: number;
  weight: number;
}

const validateArguments = (height: string, weight: string): Measurements => {
  if (!isNaN(Number()) && !isNaN(Number(weight))) {
    return {
      height: Number(height),
      weight: Number(weight),
    };
  } else {
    throw new Error('provided values were not numbers');
  }
};

// function _parseBMIArguments (args: string[]): Measurements {
//   if (args.length < 4) throw new Error("not enough arguments");
//   if (args.length > 4) throw new Error("too many arguments");

//   return validateArguments(args[2],args[3])
// }

function determineBmiResult(bmi: number): BMI {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal';
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

function calculateBmi(height: number, weight: number): string {
  return determineBmiResult(weight / Math.pow(height / 100, 2)) + ' range';
}

export default function getCalculateBMI(height: string, weight: string) {
  const measurements = validateArguments(height, weight);
  return calculateBmi(measurements.height, measurements.weight);
}

// try {
//   const measurements = parseBMIArguments(process.argv);
//   console.log(calculateBmi(measurements.height, measurements.weight));
// } catch (error: unknown) {
//   if (error instanceof Error) {
//     console.log("ERROR" + error);
//   }
// }
