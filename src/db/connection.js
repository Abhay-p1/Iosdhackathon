const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/studentdb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connection to student data base successful");
   }).catch((e)=>{
      console.log('No Connection');
    });