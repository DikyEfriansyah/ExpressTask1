import { response } from 'express'
import customerRepository from '../repository/customerRepository'

exports.createCustomer = async(request) => {
    const customer = {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        user_id: request.user.userId
    }

    return await customerRepository.save(customer)

}

exports.findByUserId = async(id) => {
    return await customerRepository.findByUser(id)
}