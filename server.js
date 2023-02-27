const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("../Social-not/./routes/./api/indexx"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/Social-not",
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Mongoose queries
mongoose.set("debug", true);

app.listen(PORT, () => console.log(" Connected on localhost:${PORT}"))
