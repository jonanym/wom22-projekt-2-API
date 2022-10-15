const express = require('express')
const router = express.Router()
const Service = require('../models/order')
const { updateOne } = require('../models/order')


// get all services
router.get('/', async (req,res) => {
    try {
        const orders = await Orders.find()
        res.send(orders)
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
})

//Create new service
router.post('/', async (req,res) => {
    try {
        const order = new Order({
        service: req.body.service,
        cabin_id: req.body.price
    })
    const newOrder = await order.save()
    res.send(newOrder)   
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
   
})

//Delete one service
router.delete('/:id', async (req,res) => {
    try {
        const order = await Order.deleteOne({
            _id: req.params.id
        })
        res.send(order)
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
})

// change something
router.patch('/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.fndByIdAndUpdate({
        _id: req.params.id}, req.body, {new: true})
        res.send({msg: "Order updated", updatedOrder: updateOne})
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
    
})
module.exports = router