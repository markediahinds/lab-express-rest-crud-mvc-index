const express = require('express')
const locations = express.Router()
const locationsArray = require('../models/location')
const person = require('../models/person')

locations.get('/', (req, res) => {
    res.json(locationsArray)
})

locations.get('/people', (req, res) => {
    
    for (let location of locationsArray) {
        let peopleAtThisLocation = []
        let locationZip = location.zip
        

        for (let persona of person) {
            let personZip = persona.mainLocation

            if(locationZip === personZip) {
                peopleAtThisLocation.push(persona)
            }
        }
        location.people = peopleAtThisLocation
    }
    res.json(locationsArray)
})

// people = []
// person.mainLocation === location.zip
// take people arr, make that the value of a new key in the location | people key = value (peoples arr)


module.exports = locations

