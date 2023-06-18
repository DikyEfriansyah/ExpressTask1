import models from "../models/init-models";

exports.save = async(req) => {
    return await models.product_category.create(req); 
}

exports.findAll = async() => {
    return await models.product_category.findAll({include : [{ model : models.products, as: "products"}]})
} 

exports.findById = async(id) => {
    return await models.product_category.findByPk(id)
}

exports.findByCategory = async(name) => {
    return await models.product_category.findOne({ where : { name : name }, raw : true})
}

exports.update = async(category, id) => {
    return await models.product_category.update(category, { where: {id : id}, attributes : {exclude : 'createdat'}, returning : true})
}

exports.delete = async(id) => {
    return await models.product_category.destroy({ where : { id : id}})
}