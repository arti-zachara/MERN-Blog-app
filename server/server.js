const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const path = require("path");

const config = require("./config");
const postRoutes = require("./routes/post.routes");
const loadTestData = require("./testData");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mongoSanitize());
app.use("/api", postRoutes);
app.use(helmet());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "/../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

// connects our back end code with the database
mongoose.connect(config.DB, {
  useNewUrlParser: true
});
let db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to the database");
  loadTestData();
});
db.on("error", err => console.log("Error " + err));

app.listen(config.PORT, function() {
  console.log("Server is running on Port:", config.PORT);
});
