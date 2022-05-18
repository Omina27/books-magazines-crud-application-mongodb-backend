const express = require ("express");
const app = express()
const PORT = 4000
const cors = require('cors')
const modules = require('./modules')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(modules)


app.listen(PORT, console.log(PORT))



