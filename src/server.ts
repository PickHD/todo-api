import express,{Application} from 'express';

import router from "./routes/index.route"
import {routeNotFound} from "./middlewares/routeNotFound.middleware"
import {errHandler} from './middlewares/errHandler.middleware'

const app : Application = express()

const port = process.env.PORT||8080

app.use(express.json())

app.use("/",router)
app.use(routeNotFound)
app.use(errHandler)

app.listen(port,() =>console.log(`Server listening on port : ${port}`))