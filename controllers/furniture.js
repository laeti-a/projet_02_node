import { FurnitureModel } from '../Models/Furniture.js'

export async function CreateFurnitureController(req, res){
    const { name, description, type, img, wood, metal, plastic} = req.body

    try {
        const newFurniture = await FurnitureModel.create({name, description, type, img, wood, metal, plastic})
        await newFurniture.save()
    
        res.redirect('/realisations')
    } catch ({ message: errorMessage }) {
        return res.status(400).render('home', { errorMessage, values: req.body });
    }

}