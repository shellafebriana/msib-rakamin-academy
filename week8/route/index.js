var express = require('express')
var route   = express.Router()
var pool = require('../config/config.js')

// connect database
pool.connect((err,res) => {
    if (err) {
        throw err
    }
    console.log('database connected')
})

route.get('/',(req,res) =>{
    res.send('Selamat Datang di Homework Week 8 by Shella Febriana ^-^')
})

route.get('/film', (req,res) => {
    var query = "SELECT title, description FROM film ORDER BY film_id ASC"
    pool.query(query, (err,result) =>{
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})
route.get('/film/:id', (req,res) => {
    var filmId = req.params.id
    var query = "SELECT title, description FROM film WHERE film_id = " + filmId
    pool.query(query, (err,result) =>{
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})
route.get('/category/:id', (req,res) => {
    var categoryId = req.params.id
    var query = "select f.title, c.name from film_category fc left join film f on fc.film_id = f.film_id left join category c on fc.category_id = c.category_id where fc.category_id = " + categoryId
        
    pool.query(query, (err,result) =>{
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})
route.get('/category/',(req,res) => {
    var query = "SELECT name FROM category ORDER BY category_id ASC"
    pool.query(query, (err,result) =>{
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})

module.exports = route