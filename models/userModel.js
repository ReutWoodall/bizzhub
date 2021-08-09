const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken")

let userSchema = new mongoose.Schema({
  //personal user info
  email:String,
  name:String,
  phone:String,
  adress:String,
 //biz info
  bizemail:String,
  bizname:String,
  bizphone:String,
  bizadress:String,
  bizlocation:String,
  biznumber:String,
  pass:String,
  role:{
    type:String,default:"regular"
  },
  date_created:{
    type:Date, default:Date.now()
  }
})

exports.UserModel = mongoose.model("users",userSchema);

exports.genToken = (_id) => {
  let token = jwt.sign({_id},"monkeysSecret",{expiresIn:"60mins"});
  return token;
}

exports.validUser = (_bodyUser) => {
  
  let joiSchema = Joi.object({
    email:Joi.string().min(2).max(100).email().required(),
    name:Joi.string().min(2).max(100).required(),
    phone:Joi.string().min(2).max(100).required(),
    adress:Joi.string().min(2).max(100).required(),

    bizname:Joi.string().min(2).max(100).required(),
    bizemail:Joi.string().min(2).max(100).email().required(),
    bizphone:Joi.string().min(2).max(100).required(),
    bizadress:Joi.string().min(2).max(100).required(),
    bizlocation:Joi.string().min(2).max(1000).required(),
    biznumber:Joi.string().min(2).max(100).required(),
    pass:Joi.string().min(2).max(100).required()
  })

  return joiSchema.validate(_bodyUser);
}


exports.validLogin = (_bodyUser) => {

  let joiSchema = Joi.object({
    email:Joi.string().min(2).max(100).email().required(),
    pass:Joi.string().min(2).max(100).required()
  })

  return joiSchema.validate(_bodyUser);
}