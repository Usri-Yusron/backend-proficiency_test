const express = require("express");
const router = express.Router();

// Import controller
const { getMovies, getMoviesById } = require("../controllers/moviesController");

// Route for all movies
router.get("/", getMovies);

// Route for get by ID
router.get("/:id", getMoviesById);

module.exports = router;
