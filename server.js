const express = require("express");

const app = express();
const PORT = 3000;

// Import routes
const movieRoutes = require("./routes/moviesRoutes");

// Middleware untuk parsing JSON (opsional, untuk request body)
app.use(express.json());

// Gunakan movieRoutes dengan prefix "/movies"
app.use("/movies", movieRoutes);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
