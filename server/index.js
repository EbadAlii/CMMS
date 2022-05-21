const express = require("express");
const app = express();
const database = require("./config/database");
const cors = require("cors");
const login = require("./routes/login");

database.connect((err) => {
  if (err) console.log(err);
});

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/login", login);

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
