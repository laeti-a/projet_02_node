import {FurnitureModel} from "../Models/Furniture.js"

export default async function meublesMetal(req, res) {
    const furniture = await FurnitureModel.find({metal:'Oui'})

    res.render("meublesMetal", {datas:furniture})
}