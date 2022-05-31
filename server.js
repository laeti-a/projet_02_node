import routes from './routes.js'
import express from 'express'
import mongoose from"mongoose"
import flash from 'connect-flash'
import session from 'express-session'
import MongoStore from 'connect-mongo'

// Connexion à la BDD MongoDB
mongoose
  .connect('mongodb://localhost:27017/designer', {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(init)

// Server config
const app = express()
const port = 3000

app.set("view engine", "pug")

app.use(
    session({
      name: 'node_app_designer',
      secret: 'node_app_designer1',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/designer' }),
      cookie: { maxAge: 24 * 3600 * 1000 },
    })
  )

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use((req, res, next) => {
  res.locals.flash = {
    success: req.flash('success'),
    error: req.flash('error'),
  };
  res.locals.currentRoute = req.url;
  res.locals.loggedUser = null;
  next();
});


// Routes
app.use(routes)

async function init() {
    console.log('Connexion à la base MongoDB initialisée!')

    app.listen(port)
}