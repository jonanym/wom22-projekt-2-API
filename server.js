const express = require('express')
    //const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize')
const app = express();
const pg = require('pg');
require('dotenv').config()

const sequelize = new Sequelize('postgresql://fwtbpmva:d498ee036dbd5c5537e4@128.214.253.167:5432/fwtbpmva')
const PORT = process.env.PORT || 3031

// Dessa calls kör setup av databaserna IFALL de inte redan existerar.
// Async funktion await sequelize.sync({ force: true }); körs i SetupS så att den direkt försöker skapa ifall det inte existerar
const setupO = require(`${__dirname}/setup/setup_O`)(sequelize)
const SetupS = require(`${__dirname}/setup/setup_S`)(sequelize)



//var conString = "postgresql://qdwephxk:ed9a29511c3fa2de1d2a@128.214.253.167:5432/qdwephxk";
//
//var client = new pg.Client(conString);
//client.connect();
//
//client.query('SELECT NOW()', (err, res) => {
//    console.log(err, res)
//    client.end()
//})





app.use(express.json())

const serviceRouter = require('./routes/services');

app.use('/services', serviceRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})