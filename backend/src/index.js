// the import of some of the module
import express from "express"
import router from "./routes/userRoutes.js"
import dotenv from "dotenv"
import errorHandler from "./middlewares/errorHandler.js"
import cors from "cors"
dotenv.config()
const app =express()
const port =process.env.PORT||3000
// the use of middlewares and some explanations 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/user",router)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`app listen on the port ${port}`)
})


