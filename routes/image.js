const express = require('express')
const imageRouter = express.Router()
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const imageValidation = require("../validators/imageValid")
const openai = new OpenAIApi(configuration);
imageRouter.post('/', async (req ,res) => {
  try {
    const {error,value} = imageValidation.validate(req.body)
    if (error) {
        return res.status(400).send({message:error.message});
    }
    const response = await openai.createImage({
        model:"dall-e-3",
        prompt: req.body.description,
        quality:"standard",
        n: 1,
        size: "1024x1024",
      });
      console.log("1")
      image_url = response?.data?.data[0]?.url; 
     // console.log(response)
      res.status(200).send({image:image_url})
  }catch (error) {
    if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
    } else {
        console.log(error.message);
    }
  }
   
   
  })


  module.exports = imageRouter