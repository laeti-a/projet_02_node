import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
})

UserSchema.static('checkUserCredentials', checkUserCredentials)

async function checkUserCredentials(email, password) {
    const user = await this.findOne({ email, password });
  
    if (!user) throw new Error(`Identifiants invalides ou utilisateur inexistant`);
  
    return user;
}

const collectionName = 'users'
export const UserModel = mongoose.model('User', UserSchema, collectionName)