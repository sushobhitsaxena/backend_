import mongoose from "mongoose"

const PatientSchema=new mongoose.Schema({

name:{
  type:String,
  required:true
},
diagonsedWith:{
  type:String,
  required:true
},
adress:{
  type:String,
  required:true
},
age:{
  type:Number,
  required:true
},
bloodgroup:{
  type:String,
  required:true
},
gender:{
  type:String,
  enum:["M","F","O"],
  required:true
},
addmittedIN:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Hospital"
}

},{timestamps:true})

export const   Patient = mongoose.model("Patient",PatientSchema)
