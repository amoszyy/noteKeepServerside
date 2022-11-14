const mongoose = require("mongoose")

let noteSchema=mongoose.Schema({
    name:{required:true, type:String},
    email:{required:true, type:String},
    password:{required:true, type:String}
  
})
let noteModel = mongoose.model("note_collections", noteSchema)
module.exports = noteModel;