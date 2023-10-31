const express = require("express");
const mongoose = require("mongoose");
var app = express();
const port = 3001;
const cors = require("cors");
const routes = require("./routes/api");

require("dotenv").config();

const MONGODB_URL = process.env.MONGO_URI;

app.use(cors());

app.use("/api", routes);

mongoose.connect(MONGODB_URL, console.log("Db Connected"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
