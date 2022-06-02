import {FurnitureModel} from "../Models/Furniture.js"

export default async function etagere(req, res) {
    const furniture = await FurnitureModel.find({})
    
    let etageres = []

    furniture.forEach(val =>{
        if(val.type == 'Etagere'){
            etageres.push(val)
        }
    })
    res.render("etagere", {datas:etageres})
}