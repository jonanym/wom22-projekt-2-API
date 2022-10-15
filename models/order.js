const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true
    },
    cabin_id: {
        type: String,
        unique: true
    }
})