import patients from "../../data/patients";
import { NewPatient, Patient, PatientNonSensitive } from "../types";
import { v1 as uuid } from 'uuid';

function getPatientNonSensitiveData(): PatientNonSensitive[] {
  return patients.map(({ id, dateOfBirth, gender, name, occupation }) => ({
    id,
    dateOfBirth,
    gender,
    name,
    occupation,
  }));
}

export function addPatient(newPatientData:NewPatient){
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const id = uuid();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const newPatient:Patient = {...newPatientData,id};
  patients.push(newPatient);
}

export { getPatientNonSensitiveData };
