import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// import ProductRoute from './routes/ProductRoute.js'
import brandRouter from "./router/brandRouter"
dotenv.config()

const app = express()
const port = process.env.APP_PORT || 5000

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// app.use()

//khalil
app.use("/", brandRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

export default app