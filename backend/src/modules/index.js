const express = require('express')
const router = express.Router()

const bookModule = require('./books/books')
const magazineModule = require('./magazines/magazines')

router
    .get('/', bookModule.GET)
    .post('/', bookModule.POST)
    .put('/:id', bookModule.PUT)
    .delete('/:id', bookModule.DELETE)

    .get('/magazine', magazineModule.GET)
    .post('/magazine', magazineModule.POST)
    .put('/magazines/:id', magazineModule.PUT)
    .delete('/magazine/:id', magazineModule.DELETE)

module.exports = router