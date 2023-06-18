import { request, response } from 'express'
import categoryService from '../service/categoryService'

exports.createNewCategoryApi = async(request,response, next) => {
    const category = await categoryService.createNewCategory(request)

    // request.category = category;
    // next()
    if(category != null){
        response.status(201).json({ data : category})
    } else {
        response.status(404).json({ message : 'Not Found'})
    }
}

exports.findAllCategoryApi = async(request,response) => {
    const category = await categoryService.findAllCategory()


    if(category != null){
        response.status(201).json({ data : category})
    } else {
        response.status(404).json({ message : 'Not Found'})
    }
}

exports.findCategoryByIdApi = async(request,response) => {
    const category = await categoryService.findCategoryById(request.params.id)


    if(category != null){
        response.status(201).json({ data : category})
    } else {
        response.status(404).json({ message : 'Not Found'})
    }
}

exports.updateCategoryApi = async(request,response) => {
    const category = await categoryService.updateCategory(request, request.params.id)


    if(category != null){
        response.status(201).json({ data : category})
    } else {
        response.status(404).json({ message : 'Not Found'})
    }
}

exports.deleteCategoryApi = async(request,response) => {
    const category = await categoryService.deleteCategory(request.params.id)


    if(category != null){
        response.status(201).json({ message : 'delete success'})
    } else {
        response.status(404).json({ message : 'Not Found'})
    }
}