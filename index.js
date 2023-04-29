require("dotenv").config()
const express = require('express')
const app = express()
const dbConnect=require('./Utils/db')
const cors=require("cors");
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
dbConnect();
app.get('/', (req, res) => res.send('hello'))

app.listen(8080, () => {console.log('server started on port 8080')})