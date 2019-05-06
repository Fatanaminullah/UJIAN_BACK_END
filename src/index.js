
const express = require('express')
const movieRouter = require('./router/movieRouter')
const categoryRouter = require('./router/categoryRouter')
const connectionRouter = require('./router/connectionRouter')

const ex = express()
const port = process.env.PORT

ex.use(express.json())
ex.use(movieRouter)
ex.use(categoryRouter)
ex.use(connectionRouter)

ex.listen(port, () => {
    console.log("Running at ", port);
    
})