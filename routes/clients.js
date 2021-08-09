const express = require('express');
const _ = require("lodash");
const { validProduct } = require("../models/productModel");
const router = express.Router();


router.get('/clients', async(req, res) => {
  try{

  let data = await ClientModel.find({})
  res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/clients", async(req,res) => {
  let validBody = validProduct(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try{
    let client = new ClientModel(req.body);
    
    await client.save();
    // TODO: show to client just the email, _id, createedAt, name
    res.status(201).json(_.pick(client,["name","email","phone","adress","date_created"]))
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

})

module.exports = router;