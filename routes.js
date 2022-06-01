import express from 'express'
import authMiddleware from './middlewares.js'
const router = express.Router()

import HomeController from './controllers/home.js'
import LoginController from './controllers/login.js'
import LogoutController from './controllers/logout.js'
import UserController from './controllers/user.js'
import RealisationController from './controllers/realisations.js'
import MateriauxController from './controllers/materiaux.js'
import MeubleBoisController from './controllers/meublesBois.js'
import ArmoireController from './controllers/armoire.js'
import EtagereController from './controllers/etagere.js'
import AjoutMeubleController from './controllers/formAjoutMeuble.js'
    
router.get('/home', HomeController)

router.get('/login', LoginController)
router.get('/logout', LogoutController)

router.get('/realisations', authMiddleware, RealisationController)

router.get('/materiaux', authMiddleware, MateriauxController)

router.get('/meublesBois', authMiddleware, MeubleBoisController)

router.get('/armoire', authMiddleware, ArmoireController)

router.get('/etagere', authMiddleware, EtagereController)

router.get('/ajout-meuble', authMiddleware, AjoutMeubleController)


router.post('/login', UserController)

export default router