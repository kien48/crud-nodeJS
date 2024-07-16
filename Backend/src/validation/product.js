import Joi from "joi";

export const productValidation = Joi.object({
    name : Joi.string().required().min(3),
    price : Joi.number().required().min(1),
    description : Joi.string().required()
})