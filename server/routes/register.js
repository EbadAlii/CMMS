const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  database.query(
    "INSERT INTO EMP (id,pass) VALUES(?,?)",
    [id, password],
    (err, result) => {
      if (err) res.send({ err: err });
    }
  );
});

module.exports = router;
