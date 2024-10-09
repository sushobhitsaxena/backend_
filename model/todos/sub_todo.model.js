import mongoose from 'mongoose'

const subTodoSchema=new mongoose.Schema({
content:{
  type:String,
  required:true
},
complete:{
  type:Boolean,
  default:false
},
createdby:{
  type:mongoose.Schema.ObjectId,
  ref:"user"
}

},{timestamps:true})

export const suntodo=mongoose.model('subtodo',subTodoSchema)


