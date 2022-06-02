import {FurnitureModel} from "../Models/Furniture.js"

export default async function armoire(req, res) {
    const furniture = await FurnitureModel.find({})
    
    let armoires = []

    furniture.forEach(val =>{
        if(val.type == 'Armoire'){
            armoires.push(val)
        }
    })
    
    res.render("armoire", {datas:armoires})
}