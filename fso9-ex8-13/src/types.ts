export interface Diagnosis{
    code: string;
    name: string;
    latin?: string;
}

export enum Gender{
    Male="male",
    Female="female",
    Other="other"
}

export interface Patient{
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
}

export type newPatient = Omit<Patient,'id'>;
export type PatientNonSensitive = Omit<Patient,'ssn'>;