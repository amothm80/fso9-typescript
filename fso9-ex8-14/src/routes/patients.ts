import express from "express";
import { Response } from "express";
// import cors from 'cors';
import { addPatient, getPatientNonSensitiveData } from "../services/patients";
import { PatientNonSensitive, NewPatient } from "../types";
import { validatePatientData } from "../utils/patients";
import { z } from "zod";

const router = express.Router();

router.get("/", (_req, res: Response<PatientNonSensitive[]>) => {
  res.send(getPatientNonSensitiveData());
});

router.post("/", (req, res) => {
  console.log("posting");
  try {
    const validPatientData: NewPatient = validatePatientData(req.body);
    addPatient(validPatientData);
    res.status(200).send(validPatientData);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: error.issues });
    } else {
      res.status(400).send({ error: "unknown error" });
    }
    // let errorMessage = 'Something went wrong.';
    // if (error instanceof Error) {
    //   errorMessage += ' Error: ' + error.message;
    // }
    // res.status(400).send(errorMessage);
  }
});

export default router;
