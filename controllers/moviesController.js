const fs = require("fs");

let moviesData = [];

try {
    const data = fs.readFileSync("./data/movies_metadata.json", "utf-8");
    moviesData = JSON.parse(data);
} catch (error) {
    console.error("Error reading movies_metadata.json:", error.message);
}

// GET: all movies
exports.getMovies = (req, res) => {
    if (!moviesData.length) {
        return res.status(500).json({ error: "Movies data is not available" });
    }
    res.json(moviesData);
};

// GET: by ID
exports.getMoviesById = (req, res) => {
    const movieId = Number(req.params.id);
    
    if (isNaN(movieId)) {
        return res.status(400).json({ error: "Invalid movie ID" });
    }

    const movie = moviesData.find((m) => m.id === movieId);

    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
};
