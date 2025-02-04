import express from "express";
import { Response } from "express";
import cors from 'cors';
import { getDiagnoses } from "../services/diagnoses";
import { Diagnosis } from "../types";


const router = express.Router();

router.get('/',cors(),(_req,res:Response<Diagnosis[]>)=>{
    res.send(getDiagnoses());
});


export default router;