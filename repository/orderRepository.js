import models from "../models/init-models";

exports.save = async(req) => {
    return await models.orders.create(req)
}

exports.findByUser = async(req) => {
    let orders = await models.orders.findOne({attributes: ["order_id", "totalproduct"], where : { user_id : req}})

    orders = JSON.stringify(orders)
    orders = JSON.parse(orders)
    return orders
}

exports.updateTotal = async(total, id) =>{
    return await models.orders.update({ totalproduct : total}, {where : { order_id : id }})
}

exports.updatePrice = async(total, id) =>{
    return await models.orders.update({ totalprice : total}, {where : { order_id : id }})
}