// "id": "d2773336-f723-11e9-8f0b-362b9e155667",
// "name": "John McClane",
// "dateOfBirth": "1986-07-09",
// "ssn": "090786-122X",
// "gender": "male",
// "occupation": "New york city cop"
import { newPatient,Gender } from "../types";
import { isDate,isString ,isNumber, isGender} from "./utils";




function parseName(name:unknown):string{
    if (!name || !isString(name)){
        throw new Error("Missing name or invalid name field");
    }
    return name;
}


function parseDateOfBirth(dateOfBirth:unknown):string{
    if (!dateOfBirth || !isString(dateOfBirth)||!isDate(dateOfBirth)){
        throw new Error ("Missing date or invalid date field");
    }
    return dateOfBirth;
}

function parseSSN(ssn:unknown):string{
    if(!ssn||!isString(ssn)||!isNumber(ssn)){
        throw new Error("Missing ssn or invalid ssn field");
    }
    return ssn;
}

function parseOccupation(occupation:unknown):string{
    if(!occupation || !isString(occupation)){
        throw new Error ("Missing occupation or invalid occupation field");
    }
    return occupation;
}



function  parseGender(gender:unknown):Gender{
    if (!gender || !isString(gender) || !isGender(gender)){
        throw new Error ("Missing gender or invalid gender field");
    }
    return gender;
};

export function validatePatientData(object: unknown):newPatient {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newEntry:newPatient = {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSSN(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
    };

    return newEntry;
  }
  throw new Error("Incorrect data: some fields are missing");
}
