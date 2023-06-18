import orderRepository from '../repository/orderRepository'
import orderDetailRepository from '../repository/orderDetailRepository'
import productRepository from '../repository/productRepository'


exports.createNewOrder = async(request) => {
    const order = {
        user_id : request.user.userId
    }

    return await orderRepository.save(order)
}

exports.userOrder = async(request) => {
    try{
        const product = await productRepository.findByProduct(request.body.product_id)
        const order = await orderRepository.findByUser(request.user.userId)

        console.log(order.order_id)
        
            const orders = {
                order_id: order.order_id,
                product_id : product.id,
                quantity : request.body.quantity
            }
        
        console.log(orders.order_id)

        await orderDetailRepository.save(orders)

    } catch (err) {
        console.log(err)
    }
}  

exports.qtyUpdate = async(request) => {
    const product = await productRepository.findByProduct(request.body.product_id)
    const orderDetailQty = await orderDetailRepository.findByProduct(product.id)

    console.log(orderDetailQty)
    console.log(product.quantity)
    console.log(product.price)

    const qtyUpdate = product.quantity - orderDetailQty.quantity

    console.log(qtyUpdate)

    // await productRepository.updateQty(qtyUpdate, product.id)

    const order = await orderRepository.findByUser(request.user.userId)
    console.log(order.totalproduct)
 
    // const qountOrder = await orderDetailRepository.countAll(order.order_id)

    // await orderRepository.updateTotal(qountOrder, order.order_id)

    const price = product.price*order.totalproduct
    await orderRepository.updatePrice(price, order.order_id)
    // const product = await productRepository.findByProduct(request.order.product_id)
    // const orderDetailQty = await orderDetailRepository.findByProduct(product.id)

    // console.log(orderDetailQty)
    // console.log(product)
}