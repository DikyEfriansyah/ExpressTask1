import categoryRepository from '../repository/categoryRepository'

exports.createNewCategory = async(req) => {
    const category = {
        name : req.body.name,
        description : req.body.description
    }

    return await categoryRepository.save(category)
}

exports.findAllCategory = async() => {
    return await categoryRepository.findAll()
}

exports.findCategoryById = async(id) => {
    return await categoryRepository.findById(id)
}

exports.updateCategory = async(req, id) => {
    const category = {
        name : req.body.name,
        description : req.body.description
    }

    return await categoryRepository.update(category, id)
}

exports.deleteCategory = async(id) => {
    return await categoryRepository.delete(id)
}