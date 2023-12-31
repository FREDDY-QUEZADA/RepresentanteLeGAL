const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.get('/', function(req, res) {
    const filtro_producto = req.query.codigo || null
    controller.get_producto( filtro_producto )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

route.post('/', function(req, res) {
    console.log( req.body )
    controller.add_producto( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 500) )
})

module.exports = route