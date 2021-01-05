import express from 'express';
import { getAllTodoController,createTodoController, deleteTodoController, getOneTodoController, updateTodoController } from '../controllers/todo.controller';

const todoApiRouter: any = express.Router()

todoApiRouter.get("/",getAllTodoController)
todoApiRouter.post("/",createTodoController)
todoApiRouter.get("/:id",getOneTodoController)
todoApiRouter.put("/:id",updateTodoController)
todoApiRouter.delete("/:id",deleteTodoController)

export default todoApiRouter