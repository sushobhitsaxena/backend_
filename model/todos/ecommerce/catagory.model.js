import mongoose from "mongoose"

const catagoreySchema=new mongoose.schema({

name:{
  type:String,
  required:true
},


},{timestamp:true})

export const Catogorey=mongoose.model("Catagory",catagoreySchema)
