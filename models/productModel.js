const mongoose = require("mongoose");
const Joi = require("joi");

let productSchema = new mongoose.Schema({
  biznum:String,
  name:String,
  price:String,
  info:String,
  bizlocation:String,
  
  date_created:{
    type:Date, default:Date.now()
  }
})

exports.ProductModel = mongoose.model("products",productSchema);

exports.validProduct = (_bodyProduct) => {
 
  let joiSchema = Joi.object({
    biznum:Joi.string().min(2).max(100),
    bizlocation:Joi.string().min(2).max(100),
    name:Joi.string().min(2).max(100).required(),
    price:Joi.string().min(2).max(100).required(),
    info:Joi.string().min(2).max(100).required(),
    img:Joi.string().min(2).max(9999).allow(null, '')

  })

  return joiSchema.validate(_bodyProduct);
}