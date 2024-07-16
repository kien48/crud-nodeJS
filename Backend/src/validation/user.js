import Joi from 'joi';

export const userValidation = Joi.object({
    userName: Joi.string().required().min(6).max(255).messages({
        "string.empty": "Không được để trống",
        "any.required": "Là trường bắt buộc",
        "string.min": "Phải có ít nhất {#limit} ký tự",
        "string.max": "Phải có ít hơn {#limit} ký tự"
    }),
    email: Joi.string().required().email().messages({
        "string.empty": "Không được để trống",
        "any.required": "Là trường bắt buộc",
        "string.email": "Email không đúng định dạng"
    }),
    password: Joi.string().required().min(6).max(255),
    confirmPassword: Joi.string().required().valid(Joi.ref('password'))
});
