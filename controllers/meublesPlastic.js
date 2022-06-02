import {FurnitureModel} from "../Models/Furniture.js"

export default async function meublesPlastic(req, res) {
    const furniture = await FurnitureModel.find({})

    let plasticFurniture = []

    furniture.forEach(val =>{
        if(val.plastic == 'Oui'){
            plasticFurniture.push(val)
        }
    })
    
    res.render("meublesPlastic", {datas:plasticFurniture})
}