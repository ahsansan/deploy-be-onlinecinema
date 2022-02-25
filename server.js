// env
require("dotenv").config();

const express = require("express");
const router = require("./src/router");
const cors = require("cors");

const app = express();

// port
const port = process.env.PORT || 5000;

// JSON
app.use(express.json());

// CORS
app.use(cors());

// URL API
app.use("/api/cinema/v1/", router);

// Home
app.get("/", function (req, res) {
  res.send({
    message: "Hello World",
  });
});

// ImageFile
app.use("/uploads", express.static("uploads"));

// Server listen
app.listen(port, () => console.log(`Server running on port ${port}`));
