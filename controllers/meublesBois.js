import {FurnitureModel} from "../Models/Furniture.js"

export default async function meublesBois(req, res) {
    const furniture = await FurnitureModel.find({wood:'Oui'})
    
    res.render("meublesBois", {datas:furniture})
}