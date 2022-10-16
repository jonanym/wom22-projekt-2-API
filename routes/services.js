const express = require('express')
const router = express.Router()

const { updateOne } = require('../models/createService')
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgresql://fwtbpmva:d498ee036dbd5c5537e4@128.214.253.167:5432/fwtbpmva')
const Service = require('../models/createService')

router.get('/', async(req, res) => {
    try {
        const service = require('../models/createService')(sequelize)
        res.send(service)
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
})

router.post('/services', async(req, res) => {
    try {
        let response = "Overwrite this"

        await sequelize.sync().then(() => {
            Service.create({
                name: req.name,
                price: req.price,
                available: req.available
            }).then(res => {
                response = res;
                console.log(error)
            }).catch((error) => {
                response = ('Failed: ', error)
                console.log(error)
            });
        }).catch((error) => {
            console.log(error)
        });

        res.send(response)
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }

})

router.delete('/', async(req, res) => {
    try {
        const service = await Service.deleteOne({
            _id: req.params.id
        })
        res.send(service)
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const updatedService = await Service.fndByIdAndUpdate({
            _id: req.params.id
        }, req.body, { new: true })
        res.send({ msg: "Service updated", updatedService: updateOne })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }

})
module.exports = router