const express = require("express");
const cors = require("cors");

const config = require("./config");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/posts", (req, res) => {
  const data = [
    {
      id: "1adfasf",
      title: "Lorem Ipsum",
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
    },
    {
      id: "2evxc34",
      title: "Lorem Ipsum II",
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
    }
  ];
  res.json(data);
});

app.listen(config.PORT, function() {
  console.log("Server is running on Port:", config.PORT);
});
