import express from 'express'

const router = express.Router()

import HomeController from './controllers/home.js'
import LoginController from './controllers/login.js'
import LogoutController from './controllers/logout.js'
import UserController from './controllers/user.js'
import RealisationController from './controllers/realisations.js'
import MateriauxController from './controllers/materiaux.js'
import MeubleBoisController from './controllers/meublesBois.js'
import MeubleMetalController from './controllers/meublesMetal.js'
import MeublePlasticController from './controllers/meublesPlastic.js'
import ArmoireController from './controllers/armoire.js'
import EtagereController from './controllers/etagere.js'
import AjoutMeubleController from './controllers/formAjoutMeuble.js'
import { CreateFurnitureController } from './controllers/furniture.js'

import {authMiddleware} from './middlewares.js'
    
router.get('/', HomeController)

router.get('/login', LoginController)
router.get('/logout', LogoutController)

router.get('/realisations', authMiddleware, RealisationController)

router.get('/materiaux', authMiddleware, MateriauxController)

router.get('/meublesBois', authMiddleware, MeubleBoisController)
router.get('/meublesMetal', authMiddleware, MeubleMetalController)
router.get('/meublesPlastic', authMiddleware, MeublePlasticController)

router.get('/armoire', authMiddleware, ArmoireController)

router.get('/etagere', authMiddleware, EtagereController)

router.get('/ajout-meuble', authMiddleware, AjoutMeubleController)


router.post('/login', UserController)
router.post('/', CreateFurnitureController)

export default router