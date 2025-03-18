const express = require('express');
const {movieIndex,movieGet,moviePut,movieDelete}=require('../controller/movie.controller')
const router = express.Router();

// crud functionality for movies;

//c - creating a movie data
router.post('/',movieIndex)

//r - Getting a movie data
router.get('/',movieGet)

//u - update a movie data
router.put('/:id',moviePut)

//d delete a movie data
router.delete('/:id',movieDelete)

module.exports = router;
