import { FurnitureModel } from '../Models/Furniture.js'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function CreateFurnitureController(req, res){
    const { name, description, type, img, wood, metal, plastic} = req.body

    res.sendFile(path.join(__dirname, '../public/img/' + img))

    try {
        const newFurniture = await FurnitureModel.create({name, description, type, img, wood, metal, plastic})
        await newFurniture.save()
    
        res.redirect('/realisations')
    } catch ({ message: errorMessage }) {
        return res.status(400).render('home')
    }

}