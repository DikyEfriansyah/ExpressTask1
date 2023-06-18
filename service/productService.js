import productRepository from '../repository/productRepository'
import categoryRepository from '../repository/categoryRepository'

exports.createNewProduct = async(req) => {
    const category = await categoryRepository.findByCategory(req.body.category_id)

    console.log(category.id)

    const product = {
        name: req.body.name,
        description : req.body.description,
        category_id : category.id,
        price : req.body.price,
        photo: req.file.filename,
        quantity: req.body.quantity
    }

    return await productRepository.save(product)
}