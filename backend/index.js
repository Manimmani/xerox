const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config();

const StudentModel=require('./models/Student')
const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.mongo_url);

//request from front end and handled by backend
app.post('/register',(req,res)=>{
    StudentModel.create(req.body)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
//for the login details
app.post('/login',(req,res)=>
{
    const{name,password}=req.body;
    StudentModel.findOne({email:email})
    .then(ans=>
    {
        if(ans)
        {

            if(ans.password===password)
            {
                res.json("success");
            }
            else
            {
                res.json("the password is incorrect")
            }
        }
        else
        res.json("No record existed");
       
    })
})


app.get('/',(req,res)=>
{
   res.send("hello how are");
}
);
app.listen(3000,()=>
{
    console.log("server is runnnign");
})