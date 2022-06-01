import mongoose from 'mongoose'

const FurnitureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    img: { required: true },
    wood: { type: Boolean, required: true },
    metal: { type: Boolean, required: true },
    plastic: { type: Boolean, required: true },
})

export const FurnitureModel = mongoose.model('furniture', FurnitureSchema, 'furniture')