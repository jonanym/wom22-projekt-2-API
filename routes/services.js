const express = require('express')
const router = express.Router()
const Service = require('../models/service')
const { updateOne } = require('../models/service')

router.get('/', async (req,res) => {
    try {
        const services = await Service.find()
        res.send(services)
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
})

router.post('/', async (req,res) => {
    try {
        const service = new Service({
        service: req.body.service,
        price: req.body.price
    })
    const newService = await service.save()
    res.send(newService)   
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
   
})

router.delete('/', async (req,res) => {
    try {
        const service = await Service.deleteOne({
            _id: req.params.id
        })
        res.send(service)
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const updatedService = await Service.fndByIdAndUpdate({
        _id: req.params.id}, req.body, {new: true})
        res.send({msg: "Service updated", updatedService: updateOne})
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
    
})
module.exports = router