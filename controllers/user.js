import { UserModel } from '../Models/User.js'

export default async function UserController(req, res) {
    const { email, password } = req.body;
  
    try {
      const loggedUser = await UserModel.checkUserCredentials(email, password);
  
      // Saves user in session
      req.session.user = loggedUser;
  
      req.flash('success', `Connexion réussie `);
      res.redirect('/');
    } catch (error) {
      req.flash('error', `Connexion impossible ! ${error.message}`);
      res.redirect('/login');
    }
}