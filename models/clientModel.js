const mongoose = require("mongoose");
const Joi = require("joi");
const { required } = require("joi");

let clientSchema = new mongoose.Schema({
 
  name:String,
  phone:String,
  email:String,
  adress:String,
 
  date_created:{
    type:Date, default:Date.now()
  }
})

exports.ClientModel = mongoose.model("clients",clientSchema);

exports.validProduct = (_bodyClient) => {

  let joiSchema = Joi.object({
   
    name:Joi.string().min(2).max(100).required(),
    phone:Joi.string().min(2).max(100).required(),
    email:Joi.string().min(2).max(100).email().allow(null, ''),
    adress:Joi.string().min(2).max(100).allow(null, '')

  })

  return joiSchema.validate(_bodyClient);
}