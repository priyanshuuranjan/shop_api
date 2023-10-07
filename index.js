const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());

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
  console.log("im live");
  console.log(`Server is running on port ${PORT}`);
});
