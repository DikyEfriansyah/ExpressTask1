import { request, response } from 'express'
import userService from '../service/userService'
import jwtUtil from '../util/jwt.util'

exports.createNewUserApi = async(request, response) => {
    const user = await userService.signUp(request)

    response.status(201).json({ data: user})
}

exports.signInUserApi = async(request,response) => {
    const user = await userService.signIn(request)

    if(user) {
        const requestToken = {
            id: user.id,
            username: user.username
        }

        const tokens = await jwtUtil.generateToken(requestToken)

        response.status(200).json({ token : tokens})
    } else {
        response.status(401).json({ error : "Unauthorized access"})
    }
}

