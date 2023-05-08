import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export function expressValidate( req : Request, res : Response, next : NextFunction){
  const result = validationResult(req)
  // console.log("Results" , result)
  // console.log()
  if(!result.isEmpty()){
    return res.status(400).json({msg : 'Incorrect input values', errors : result.array()})
  }
  next()
}