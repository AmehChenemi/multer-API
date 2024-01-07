const express = require('express')
const config = require('./config/config.js')
const userRouter = require('./router/router.js')
const port = process.env.PORT

const app = express()
 app.use(express.json())
 app.use('/api/v1/user', userRouter)
 app.use('/uploads', express.static('uploads'));
 app.use('/api/v1/user', (req,res)=>{
    res.send('WELCOME TO AMEH FAMILY')
 })





app.listen(port,()=>{
    console.log(`server is listening port ${port}`)
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         