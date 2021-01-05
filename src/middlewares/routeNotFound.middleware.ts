import {Request,Response,NextFunction} from "express"

export const routeNotFound = (req:Request,res:Response,next:NextFunction): any =>{
  if(!req.route){
    return next(new Error("Route not Found."))
  }
}