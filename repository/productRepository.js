import models from '../models/init-models'

exports.save = async(req) => {
    return await models.products.create(req)
}

exports.findAll = async(req) => {
    return await models.products.findAll()
}

exports.findById = async(id) => {
    return await models.products.findByPk(id)
}

exports.findByProduct = async(req) => {
    let product =  await models.products.findOne({attributes: ["id","quantity", "price"], where : { name : req}})

    product = JSON.stringify(product)
    product = JSON.parse(product)
    return product
} 

exports.updateQty = async(quantity, id) =>{
    return await models.products.update({quantity : quantity}, {where : { id : id }})
}