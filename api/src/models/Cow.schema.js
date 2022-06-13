const { Schema, model } = require('mongoose');
const Joi = require('@hapi/joi');

const cowSchema = new Schema({
    idSenasa: { 
        type: String,
        required: true,
        minLength: 16,
        maxLength: 16
    },
    type: {
        type: String,
        required: true,
        enum: ["Novillo", "Toro", "Vaquillona"]
    },
    animalWeight: {
        type: Number,
        required: true
    },
    pasture: {
        type: String,
        required: true,
        maxLength: 200
    },
    dispositiveNumber: {
        type: String,
        minLength: 8,
        maxLength: 8
    },
    dispositiveType: {
        type: String,
        required: true,
        enum: ["CARAVANA", "COLLAR"]
    },
});

const Cow = model('Cow', cowSchema);

cowSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const joiCowSchema = Joi.object({
    idSenasa: Joi.string().required().min(16).max(16),
    type: Joi.string().valid('Novillo', 'Vaquillona', 'Toro').required(),
    animalWeight: Joi.number().required(),
    pasture: Joi.string().required().max(200),
    dispositiveNumber: Joi.string().alphanum().min(8).max(8),
    dispositiveType: Joi.string().valid('CARAVANA', 'COLLAR').alphanum().required()
})

module.exports = { Cow, joiCowSchema }