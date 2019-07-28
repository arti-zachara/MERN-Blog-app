const express = require("express");
const cors = require("cors");

const config = require("./config");
const postRoutes = require("./routes/post.routes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", postRoutes);

app.listen(config.PORT, function() {
  console.log("Server is running on Port:", config.PORT);
});
