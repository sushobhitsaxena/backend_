import mongoose from "mongoose"
const todoschema=new mongoose.Schema({

  content:{
    type:String,
    required:true,
    
  },
  complete:{
    type:String,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"  // giving reference of other file
  },
  subtodos:[ // array
    { //object
      type:mongoose.Schema.ObjectId,
      ref:"subtodo"
    }
  ]  // array of subtodo


},{timestamps:true})

export const todo=mongoose.model("todo",todoschema)


