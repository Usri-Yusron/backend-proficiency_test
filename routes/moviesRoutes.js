const express = require("express");
const router = express.Router();

// Import controller
const { getMovies, getMoviesById } = require("../controllers/moviesController");

// Route untuk mendapatkan semua film
router.get("/", getMovies);

// Route untuk mendapatkan film berdasarkan ID
router.get("/:id", getMoviesById);

module.exports = router;
