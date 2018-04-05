const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

const userRoutes = require('./routes/users')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).send({
      message: 'Welcome home'
    })
})

app.use('/users', userRoutes)

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})