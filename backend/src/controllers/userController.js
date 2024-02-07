import asyncHadler from "express-async-handler"

export const getPost = asyncHadler(async(req,res)=>{
    res.json({message:`the server request is `})
})

export const postUser = asyncHadler(async (req,res)=>{
    const {name,email,password,}= req.body
    res.json({message:`the request body is :${req.body}`})
})

