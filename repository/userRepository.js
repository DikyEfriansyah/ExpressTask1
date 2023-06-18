import models from "../models/init-models";

exports.save = async(req) => {
    const user = await models.users.create(req)

    return user
}

exports.findByUsername = async(username) => {
    const userByUsername = await models.users.findOne({ where: { username : username}})

    return userByUsername;
}