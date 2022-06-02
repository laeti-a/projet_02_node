import {FurnitureModel} from "../Models/Furniture.js"

export default async function realisations(req, res) {
    const furniture = await FurnitureModel.find({})

    res.render("realisations", {datas:furniture})
}