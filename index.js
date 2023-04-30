require("dotenv").config()
const express = require('express')
const app = express()
const dbConnect=require('./Utils/db')
const cors=require("cors");
const authRouter=require('./Routes/auth.routes')
const userRouter=require('./Routes/user.routes')
const postRouter=require('./Routes/post.routes')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
dbConnect();
app.get('/', (req, res) => res.send('hello'))
app.use('/api',authRouter)
app.use('/api/users',userRouter)
app.use('/api/posts',postRouter)
app.listen(8080, () => {console.log('server started on port 8080')})