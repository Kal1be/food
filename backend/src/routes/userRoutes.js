import express from "express"
import {getPost,postUser} from "../controllers/userController.js"
 
const router = express.Router()


router.get("/",getPost)

router.post("/",postUser)

export default router