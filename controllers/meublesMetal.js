import {FurnitureModel} from "../Models/Furniture.js"

export default async function meublesMetal(req, res) {
    const furniture = await FurnitureModel.find({})

    let metalFurniture = []

    furniture.forEach(val =>{
        if(val.metal == 'Oui'){
            metalFurniture.push(val)
        }
    })
    
    res.render("meublesMetal", {datas:metalFurniture})
}