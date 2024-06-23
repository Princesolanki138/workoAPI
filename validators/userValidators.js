import joi from "joi";

export const createUserValidator = (data) => {
  const schema = joi.object({
    name: joi.string().required().min(2),
    email: joi.string().email().required(),
    password: joi.string().required().min(6),
    age: joi.number().required().integer().min(0),
    city: joi.string().required(),
    zipcode: joi.number().required().integer().min(5)
  })
  return schema.validate(data)
}

export const loginUserValidator = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required().min(6)
  })
  return schema.validate(data)
}
export const updateUserValidator = (data) => {
  const schema = joi.object({
    name: joi.string().min(2),
    email: joi.string().email(),
    age: joi.number().integer().min(0),
    city: joi.string(),
    zipcode: joi.number().integer().min(5)
  })
  return schema.validate(data)
}

export default { createUserValidator, updateUserValidator }