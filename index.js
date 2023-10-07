const express = require("express");
const app = express();

const cors = require("cors");
const PORT = process.env.PORT || 3000;

// Serve static files from the 'images' folder
app.use(express.static('images'));

app.use(cors());

// Middleware for logging request URLs
app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

// Update the path to data.json to point to the "src" folder
// const apiData = require("../data.json");
const apiData = require("./data.json")

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/products", (req, res) => {
    res.send(apiData);
});

// Start the server
app.listen(PORT, () => {
  console.log("I'm live");
  console.log(`Server is running on port ${PORT}`);
});
