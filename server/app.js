require('dotenv').config()
const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');
const cors = require('cors');
const morgan = require('morgan')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'))

// console.log(process.env);

app.use('/', indexRoutes)

app.listen(3000, ()=> {
  console.log('Server started on port 3000');
})
