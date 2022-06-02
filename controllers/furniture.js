import { FurnitureModel } from '../Models/Furniture.js'
import fs from 'fs'

// import multer from 'multer'

// // Code to upload images in the app //
// let storage = multer.diskStorage({
//   destination: (req, file, cb) =>{
//       cb(null, '../public/img/')
//   },
//   filename: (req, file, cb) =>{
//       console.log(file)
//       cb(null, file.originalname)
//   }
// })
// const fileFilter = (req, file, cb) =>{
//   if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' ||file.mimetype === 'image/png'){
//       cb(null, true)
//   }
//   else{
//       cb(null, false)
//   }
// }
// let upload = multer({
//   storage:storage,
//   fileFilter:fileFilter
// })

export async function CreateFurnitureController(req, res){
    const { name, description, type, img, wood, metal, plastic} = req.body

    // upload.single(img)

    try {
        const newFurniture = await FurnitureModel.create({name, description, type, img, wood, metal, plastic})
        await newFurniture.save()
    
        res.redirect('/realisations')
    } catch ({ message: errorMessage }) {
        return res.status(400).render('home')
    }

}