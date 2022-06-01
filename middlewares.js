export default function authMiddleware(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login')
  }
  res.locals.loggedUser = req.session.user
  next()
}