import express,{Request,Response} from 'express';

import todoApiRouter from "./todo.route"

const router: any = express.Router()

router.get("/",(req : Request,res:Response)=>{
  return res.status(200).json({
    success:true,
    msg:"HELLO WORLD!!"
  })
})

router.use("/api/v1/todo",todoApiRouter)

export default router