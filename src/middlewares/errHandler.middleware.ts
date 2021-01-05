import {Request,Response,NextFunction} from 'express';

export const errHandler = (err:Error,req:Request,res:Response,next:NextFunction) : any =>{
  const statusErrCode : number = res.statusCode != 200 ? res.statusCode : 500

  return res.status(statusErrCode).json({
    code:statusErrCode,
    success:false,
    err_message:err.message,
    stack:err.stack
  })

}