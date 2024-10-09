import mongoose from "mongoose" //import mongoose
const userschema=new mongoose.schema({

  // username:String,
  // email:String,
  // isActive:Boolean
  //better approach 

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
    required:true // this can also take array
  }

},{timestamps:true}
) // it is a method which takes the object , creating schema in this line

export const user=mongoose.model("user",userschema)  // making model and connect with database

// in this the user will be converted into users and everything will be in lower case in the datbases

