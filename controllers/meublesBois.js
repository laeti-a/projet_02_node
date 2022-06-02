import {FurnitureModel} from "../Models/Furniture.js"

export default async function meublesBois(req, res) {
    const furniture = await FurnitureModel.find({})

    let woodFurniture = []

    furniture.forEach(val =>{
        if(val.wood == 'Oui'){
            woodFurniture.push(val)
        }
    })
    
    res.render("meublesBois", {datas:woodFurniture})
}