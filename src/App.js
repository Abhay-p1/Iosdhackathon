const express = require('express');
const app=express();
require("../src/db/connection");
const StudentColln = require("../src/models/defineschema");

const path = require('path');
const PORT = process.env.PORT || 8000;
const  Spath = path.join(__dirname,"../public");
app.use(express.static(Spath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/",async (req,res)=>{
  res.send(' temporary home response');
})
app.post("/register",async(req,res)=>{
   try {
     const password = req.body.password;
     const cpassword = req.body.confirmpassword;
     if(cpassword===password){
       const astudent = new StudentColln({
              name:req.body.name,
              email:req.body.email,
              phone:req.body.phone,
              password:password,
              confirmpassword:cpassword,
       })
        const saved = await astudent.save();
        res.render('../public/index.html');
     }
     else{
       res.send('invalid details');
      }
   } catch (error) {
    res.status(400).send(error);
   }
})
app.post("/login",async (req,res)=>{
     try {
       const email = req.body.email;
       const password = req.body.password;
        const studata = await StudentColln.findOne({email:email});
        if(studata.password===password){
          res.send(201).render("../public/index.html");
        }
     } catch (error) {
       res.status(400).send('invalid login details')
     }
})
app.listen(PORT,()=>{
  console.log(`listening to port ${PORT}`);
});
