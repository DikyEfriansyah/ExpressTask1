import bcrypt from 'bcrypt'
import userRepository from '../repository/userRepository'

exports.signUp = async(req) => {
    const salt = await bcrypt.genSalt(10)
    const HashPassword = await bcrypt.hash(req.body.password, salt)
    const user = {
        username: req.body.username,
        password: HashPassword
    }

    return await userRepository.save(user)
}

exports.signIn = async(req) => {
    const user =  await userRepository.findByUsername(req.body.username)

    if(user != null){
        const checkPassword = await bcrypt.compare(req.body.password, user.password)

        if(checkPassword) {
            return user;
        } else {
            return null;
        }
    } else {
        return null;
    }
}