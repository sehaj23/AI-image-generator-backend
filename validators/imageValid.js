const Joi = require("joi")

const imageValidation = Joi.object({
    description:Joi.string().min(3).required()
})
module.exports = imageValidation