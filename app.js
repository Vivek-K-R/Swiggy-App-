const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require( "bcrypt")
const express=require( "express")
const app =express()


app.use(cors())
app.use(express.json())


app.listen(3030,()=>{
    console.log("server started")
})