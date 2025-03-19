const express = require('express');
const {movieIndex,movieGet,movieDelete,movieDetails, movieUpdate}=require('../controller/movie.controller')
const router = express.Router();

// crud functionality for movies;

//c - creating a movie data
router.post('/',movieIndex)

//r - Getting a movie data
router.get('/',movieGet)
router.get('/:id',movieDetails)

//u - update a movie data

router.put('/:id',movieUpdate)

//d delete a movie data
router.delete('/:id',movieDelete)

module.exports = router;
