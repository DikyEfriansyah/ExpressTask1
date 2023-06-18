import models from "../models/init-models";

exports.save = async(req) => {
    return await models.customers.create(req)
}

exports.findByUser = async(id) => {
    return await models.customers.findOne({ where: { user_id : id}, include: [{ model : models.users, as: "user", attributes: {exclude : ['createdat', 'updateat']}}], attributes: {exclude: ['createdat', 'updateat']}})
}