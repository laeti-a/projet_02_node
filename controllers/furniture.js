import { FurnitureModel } from '../Models/Furniture.js'
import fs from 'fs'

export async function CreateFurnitureController(req, res){
    const { name, description, type, img, wood, metal, plastic} = req.body

    try {
        const newFurniture = await FurnitureModel.create({name, description, type, img, wood, metal, plastic})
        await newFurniture.save()
    
        res.redirect('/realisations')
    } catch ({ message: errorMessage }) {
        return res.status(400).render('home')
    }
}