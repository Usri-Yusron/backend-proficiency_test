const express = require("express");

const app = express();
const PORT = 3000;

// Import routes
const movieRoutes = require("./routes/moviesRoutes");

// Middleware for parsing JSON
app.use(express.json());

// route to movie
app.use("/movies", movieRoutes);

// running server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
