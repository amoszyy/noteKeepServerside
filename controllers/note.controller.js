const express = require("express");
const mongoose = require("mongoose");
const noteModel = require("../models/note.model")
const regUser = (req, res)=>{
    console.log(req.body)
    noteModel.findOne({email:req.body.email}, (err,result)=>{
    })
    let form = new noteModel(req.body)
    form.save((err)=>{
        if(err){
            console.log(err)
            res.send({message:"unable to register",status:true})
            console.log("operation failed")
        }else{  
            console.log("successful")
            res.send({message:"Registered Successfully", details:form ,status:true})
        }  
    })
}
const authenticateUser = (req, res)=>{
    console.log(req.body)
    noteModel.findOne({email:req.body.email, password:req.body.password},(err, result)=>{
        if(err){
            console.log("an error occured")
            res.send({message:"an error occured", err})
        } else{
            if(!result){
                console.log("coulnd't find user")
                res.send({message:"user not found"})
            } else{
                console.log("found user")
                res.send({message:"user found", result})
            }
        }

    })

}

module.exports = {regUser, authenticateUser}
