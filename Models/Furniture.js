import mongoose from 'mongoose'

const FurnitureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    img: { type: String, required: true },
    wood: { type: String, required: true },
    metal: { type: String, required: true },
    plastic: { type: String, required: true },
})

export const FurnitureModel = mongoose.model('furniture', FurnitureSchema, 'furniture')