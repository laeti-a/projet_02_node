import {FurnitureModel} from "../Models/Furniture.js"

export default async function meublesPlastic(req, res) {
    const furniture = await FurnitureModel.find({plastic:'Oui'})
    
    res.render("meublesPlastic", {datas:furniture})
}