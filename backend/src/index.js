// the import of some of the module
import express from "express"
import router from "./routes/userRoutes.js"
import dotenv from "dotenv"
import errorHandler from "./middlewares/errorHandler.js"
dotenv.config()
const app =express()
const port =process.env.PORT||3000
// the use of middlewares and some explanations 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",router)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`app listen on the port ${port}`)
})


