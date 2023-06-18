import express from "express";
import categoryController from '../controller/categoriController'
import userController from '../controller/userController'
import customerController from '../controller/customerController'
import productController from '../controller/productController'
import orderController from '../controller/orderController'
import middleware from '../middleware/middleware'
import uploadFile from '../middleware/upload'

const router = express.Router();


router.get('/', (req,res) => {
    res.json('index page')
})

//user routes
router.post('/signup', userController.createNewUserApi)
router.post('/signin', userController.signInUserApi)
//user routes

//category routes
router.get('/category', categoryController.findAllCategoryApi)
router.post('/category', categoryController.createNewCategoryApi)
router.get('/category/:id', middleware.authToken, categoryController.findCategoryByIdApi)
router.put('/category/:id', categoryController.updateCategoryApi)
router.delete('/category/:id', categoryController.deleteCategoryApi)
//category routes

//customer routes
router.post('/customer', middleware.authToken, customerController.createNewCustomerApi)
router.get('/profilecustomer', middleware.authToken, customerController.findByUserApi)
// customer routes

//product routes
router.post('/product', uploadFile.uploads, productController.createNewProductApi)
//product routes

//order routes
router.post('/order', middleware.authToken, orderController.createNewOrderApi)
router.post('/orders', middleware.authToken, orderController.createUserOrderApi, orderController.updateQtyProductApi)
router.put('/orders', middleware.authToken, orderController.updateQtyProductApi)

export default router