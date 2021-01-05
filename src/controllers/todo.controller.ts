import {Request,Response,NextFunction} from "express"

import Todo from '../models/todo.model';

let tempArrayTodo : Todo[] | any[] = []

export const getAllTodoController = (req:Request,res:Response,next:NextFunction): any=>{
  try {
    return res.json({
      success:true,
      code:200,
      result:tempArrayTodo
    })
  } catch (e) {
    return next(new Error(e))
  }
}

export const createTodoController = (req:Request,res:Response,next:NextFunction): any => {
  try {
    const createTodo : any = {
      id:req.body.id,
      task:req.body.task,
      isDone:req.body.isDone,
    }

    tempArrayTodo.push(createTodo)

    return res.status(201).json({
      success:true,
      code:201,
      message:"Todo Created Successfully",
      result:createTodo
    })
  } catch (e) {
    return next(new Error(e))
  }
}

export const getOneTodoController = (req:Request,res:Response,next:NextFunction): any => {
  try {
    const {id} = req.params
    const getOneTodo = tempArrayTodo.find((tid)=>tid.id === parseInt(id))
    if(!getOneTodo){
      res.statusCode=404
      return next(new Error(`Id:${id} of task is not found.`))
    }
    return res.status(200).json({
      success:true,
      code:200,
      result:getOneTodo
    })
  } catch (e) {
    return next(new Error(e))
  }
}

export const updateTodoController =(req:Request,res:Response,next:NextFunction): any => {
  try {
    const {id} = req.params
    const getIndex :number = tempArrayTodo.findIndex((tid)=>tid.id === parseInt(id))

    const updTodo = {
      id:id,
      task:req.body.task,
      isDone:req.body.isDone,
    }
    console.log(tempArrayTodo[getIndex])
    tempArrayTodo[getIndex] = updTodo

    return res.status(200).json({
      success:true,
      code:200,
      message:"Task is Updated!"
    })

  } catch (e) {
    return next(new Error(e))
  }
}

export const deleteTodoController = (req:Request,res:Response,next:NextFunction): any => {
  try {
     const {id} = req.params

     const delTodo = tempArrayTodo.filter((tid)=>tid.id !== parseInt(id))

     tempArrayTodo = delTodo

     return res.status(200).json({
      success:true,
      code:200,
      message:"Task is Deleted!"
    })
  } catch (e) {
    return next(new Error(e))
  }
}
