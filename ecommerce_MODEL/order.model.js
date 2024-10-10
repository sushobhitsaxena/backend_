import { Timestamp } from "bson"
import mongoose from "mongoose"

const orderItemSchema=new mongoose.Schema({  // it is a sub schema that will be used by oderItems
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  quantity:{

    type:Number,
    required:true
  }
})

const orderschema=new mongoose.schema({

  orderprice:{
    type:Number,
    required:true,
   
  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
   
  },
  orederItems:{
    type:[orderItemSchema],

  },
  address:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:["pending","cancelled","dilivered"] // ab user agar iske bahar se koi value dega to wo jayye gi hi nhi
    ,
    default:"pending"
  }


},{Timestamp:true})

export const Order=mongoose.model("Order",userschema)