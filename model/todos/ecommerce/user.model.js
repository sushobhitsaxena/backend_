import { Timestamp } from "bson"
import mongoose from "mongoose"

const userschema=new mongoose.schema({

  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true

  },
  password:{
    type:String,
    required:true
  }


},{Timestamp:true})

export const User=mongoose.model("User",userschema)