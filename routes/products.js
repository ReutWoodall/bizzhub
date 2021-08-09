const express = require("express");
const { validProduct } = require("../models/productModel");
// const _ = require("lodash");
// const { validProduct } = require("../models/productModel");
const router = express.Router();

router.get("/", async(req, res) => {
  try{
 console.log("stam");
  let data = await ProductModel.find({})
  res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/", async(req,res) => {
  let validBody = validProduct(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try{
    let product = new ProductModel(req.body);
    
    await product.save();
    
    res.status(201).json(_.pick(product,["biznum","name","price","info","bizlocation","date_created"]))
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

})

module.exports = router;