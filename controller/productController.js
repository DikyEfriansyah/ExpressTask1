import productService from '../service/productService'

exports.createNewProductApi = async(request, response) => {
    const product = await productService.createNewProduct(request)

    // request.category = category;
    // next()
    if(product != null){
        response.status(201).json({ data : product})
    } else {
        response.status(404).json({ message : 'Not Found'})
    }
}

