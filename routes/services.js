const express = require('express')
const service = require('../models/service')
const router = express.Router()
const Service = require('../models/service')
const { updateOne } = require('../models/service')

/*router.get('/', async(req, res) => {
    try {
        Service.getServices
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
})*/



router.post('/services', async(req, res) => {
    try {
        Service(req)
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