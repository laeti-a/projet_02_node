import { FurnitureModel } from '../Models/Furniture.js'

export async function CreateFurnitureController(req, res){
    const { name, type, img, wood, metal, plastic} = req.body

    try {
        const newFurniture = await FurnitureModel.create({name, type, email, img, wood, metal, plastic})
    
        req.flash(
          'success',
          `Le nouveau meuble a bien été ajouté ! <br> Vous pouvez retrouver votre création sur la page "<a href="/realisations">Réalisations</a>"`
        )
        res.redirect('/home');
    } catch ({ message: errorMessage }) {
        return res.status(400).render('home', { errorMessage, values: req.body });
    }

}