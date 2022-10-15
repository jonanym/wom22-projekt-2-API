const express = require('express')
const app = express();
const mongoose = require('mongoose') //importera mongoose
const PORT = process.env.PORT || 3031

require('dotenv').config()

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.on('open', () => console.log('connected to DB!'))

app.use(express.json())

const serviceRouter = require('./routes/services')
app.use('/services', serviceRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})