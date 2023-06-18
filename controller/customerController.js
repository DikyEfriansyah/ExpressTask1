import { request, response } from 'express'
import customerService from '../service/customerService'

exports.createNewCustomerApi = async(request, response) => {
    const customer = await customerService.createCustomer(request)

    if(customer != null){
        response.status(201).json({ data : customer})
    } else {
        response.status(404).json({ message : 'Not Found'})
    }
}

exports.findByUserApi = async(request, response) => {
    const customer = await customerService.findByUserId(request.user.userId)

    if(customer != null){
        response.status(201).json({ data : customer})
    } else {
        response.status(404).json({ message : 'Not Found'})
    }
}