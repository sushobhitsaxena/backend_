import mongoose from "mongoose"

const HospitalSchema=new mongoose.Schema({

name:{
  type:String,
  required:true
},
adressline1:{
  type:String,
  required:true
},
adressline2:{
  type:String,
  required:true
},
city:{
  type:String,
  required:true
},
pincode:{
  type:String,
  required:true
},
specialization:{
type:String
}

},{timestamps:true})

export const   Hospital = mongoose.model("Hospital",HospitalSchema)
