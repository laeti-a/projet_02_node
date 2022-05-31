const express = require('express')

const page = require('./controllers/home')
const page2 = require('./controllers/login')
const page3 = require('./controllers/realisations')
const page4 = require('./controllers/materiaux')

// Router
const router = (() => {
	const apiRouter = express.Router()
    
	apiRouter.route('/home').get(page.home)

	apiRouter.route('/login').get(page2.login)

	apiRouter.route('/realisations').get(page3.realisations)

	apiRouter.route('/materiaux').get(page4.materiaux)


	return apiRouter
})()

module.exports = router