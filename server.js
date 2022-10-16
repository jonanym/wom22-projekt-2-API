const express = require('express')
    //const bodyParser = require('body-parser');
const sequelize = require('sequelize')
const app = express();
const pg = require('pg');
require('dotenv').config()

const PORT = process.env.PORT || 3031

var conString = "postgresql://qdwephxk:ed9a29511c3fa2de1d2a@128.214.253.167:5432/qdwephxk";

var client = new pg.Client(conString);
client.connect();

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
})

app.use(express.json())

const serviceRouter = require('./routes/services')
app.use('/services', serviceRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})