import express from "express";
import { Response } from "express";
// import cors from 'cors';
import { addPatient, getPatientNonSensitiveData } from "../services/patients";
import { PatientNonSensitive ,newPatient} from "../types";
import { validatePatientData } from "../utils/patients";

const router = express.Router();

router.get('/',(_req,res:Response<PatientNonSensitive[]>)=>{
    res.send(getPatientNonSensitiveData());
});

router.post('/',(req,res)=>{
    console.log("posting");
    try {
        const validPatientData:newPatient = validatePatientData(req.body);
        addPatient(validPatientData);
        res.status(200).send(validPatientData);
    } catch (error:unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
          errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }

});


export default router;