const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require( "bcrypt")
const express=require( "express")
const loginModel = require("./models/admin")
const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://vivek:q3w3r7yr77i@cluster0.lzcnjke.mongodb.net/SwiggyDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/SignUp",(req,res)=>{
    let input=req.body
    let hashedPassword = bcrypt.hashSync(input.password,10)

   input.password=hashedPassword
   console.log(input)
   let result = new loginModel(input)
   result.save()
   res.json({"status":"success"})


})


app.listen(3030,()=>{
    console.log("server started")
})