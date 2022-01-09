const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    phone:{
        type:Number,
        required: 'Phone number is required',
        unique:true,
        // validate(value){
        //     if(!validator.isMobilePhone(value)){
        //         throw new Error("Phone number is invalid");
        //     }
        // }
    }
    ,
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    }

})

const Student = new mongoose.model("Student",studentSchema);
module.exports = Student;