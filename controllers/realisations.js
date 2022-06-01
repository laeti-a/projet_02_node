import mongoose from "mongoose";
import {FurnitureModel} from "../Models/Furniture.js"

export default async function realisations(req, res) {
    const furniture = await FurnitureModel.find({})

    // let test = []
    // furniture.forEach(val =>{
    //     test.push(val.name)
    // })

    // res.json(test)

    res.render("realisations")
}