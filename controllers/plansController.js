const express = require('express')
const plans = express.Router()
const plansArray = require('../models/plan')

plans.get('/', (req, res) => {
    res.json(plansArray)
})

module.exports = plans