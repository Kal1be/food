import express from "express"
import {getPost,postUser} from "../controllers/userController.js"
 
const router = express.Router()


router.get("/api/user",getPost)

router.post("/api/user",postUser)

export default router