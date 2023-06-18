import { request, response} from 'express'
import jwt from 'jsonwebtoken'
import jwtUtil from '../util/jwt.util'

exports.authToken = async(request, response, next) => {
    const authHeader = request.headers.authorization
    const token = authHeader && authHeader.split(" ")[1]

    if (token == null) return response.sendStatus(401)

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return response.sendStatus(401)

        request.user = {
            userId : user.id,
            userName : user.username
        }

        next();
    })
}