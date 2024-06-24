const express = require('express')
const locationsController = require('./controllers/locationsController')
const machinesController = require('./controllers/machinesController')
const personsController = require('./controllers/personsController')
const plansController = require('./controllers/plansController')
const specialEventsController = require('./controllers/special-eventsController')

const app = express()

app.use('/locations', locationsController)
app.use('/machines', machinesController)
app.use('/persons', personsController)
app.use('/plans', plansController)
app.use('/special-events', specialEventsController)

app.get('/', (req, res) => {
    res.send(`M.O.K.A Express Fitness`)
})


module.exports = app