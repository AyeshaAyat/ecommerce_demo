const express = require('express')
const dbConnection =require('./database/dbConnection')
const  route = require('./route')
require('dotenv').config() 
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
dbConnection()
app.use (route)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
