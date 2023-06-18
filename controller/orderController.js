import orderService from '../service/orderService'

exports.createNewOrderApi = async(request, response) => {
    const order = await orderService.createNewOrder(request)

    if(order != null){
        response.status(201).json({ data : order})
    } else {
        response.status(404).json({ message : 'Not Found'})
    }
}

exports.createUserOrderApi = async(request, response, next) => {
    const order = await orderService.userOrder(request)

    if(order != null){
        response.status(201).json({ data : order})
    } else {
        response.status(404).json({ message : 'Not Found'})
    }
}

exports.updateQtyProductApi = async(request,response) => {
    const order = await orderService.qtyUpdate(request)

    if(order != null){
        response.status(201).json({ data : order})
    } else {
        response.status(404).json({ message : 'Not Found'})
    }
}
