import { FurnitureModel } from '../Models/Furniture.js'

export async function CreateFurnitureController(req, res){
    const { name, type, img, wood, metal, plastic} = req.body

    console.log(req)

    try {
        const newFurniture = await FurnitureModel.create({name, type, email, img, wood, metal, plastic})
        await newFurniture.save()
    
        // req.flash(
        //   'success',
        //   `Le nouveau meuble a bien été ajouté ! <br> Vous pouvez retrouver votre création sur la page "<a href="/realisations">Réalisations</a>"`
        // )
        res.redirect('/realisations')
    } catch ({ message: errorMessage }) {
        return res.status(400).render('home', { errorMessage, values: req.body });
    }

}