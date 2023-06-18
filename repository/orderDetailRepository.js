import models from "../models/init-models";

exports.save = async(req) => {
    return await models.order_detail.create(req)
}

exports.countAll = async(req) => {
    return await models.order_detail.count({ where : { order_id : req}})
}

exports.findByOrder = async(req) => {
    return await models.order_detail.findOne({ where : { order_id : req}})
}

exports.findByProduct = async(req) => {
    let productQty = await models.order_detail.findOne({attributes : ["quantity"], where : { product_id : req}, order: [['createdat', 'DESC']]})

    productQty = JSON.stringify(productQty)
    productQty = JSON.parse(productQty)
    return productQty
}