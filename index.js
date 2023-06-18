import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import models,{sequelize} from './models/init-models'
import router from './routes/router.js'

dotenv.config()

const app = express()
const expressJson = express.json()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(async(req,res,next)=> {
    req.context = {models}
    next()
})


const port = process.env.PORT || 3004

app.use(router)

app.listen(port,()=> console.log(`Server listening on port ${port}`))