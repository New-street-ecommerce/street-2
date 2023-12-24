import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import artistRouter from './router/artistRouter'

import userRouter from "./router/userRouter"
// import ProductRoute from './routes/ProductRoute.js'
import brandRouter from "./router/brandRouter"
import cartRouter from "./router/cartRouter"

dotenv.config()

const app = express()
const port = process.env.APP_PORT || 5001

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/artist',artistRouter)
app.use("/user",userRouter)


// products
 import routeProd from "./router/products"
app.use('/product',routeProd)

import routecol from "./router/collection"
app.use('/collection',routecol)





//khalil
app.use("/brand", brandRouter)
app.use("/cart", cartRouter)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

export default app