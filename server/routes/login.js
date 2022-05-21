const express = require("express");
const router = express.Router();
const database = require("../config/database");

router.post("/", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  database.query(
    "SELECT * FROM EMP WHERE id = ? AND pass = ?",
    [id, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "WRONG USERNAME OR PASS" });
      }
    }
  );
});

router.post("/register", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  database.query(
    "INSERT INTO EMP (id,pass) VALUES(?,?)",
    [id, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err.sqlMessage });
      }
    }
  );
});

router.post("/admin", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  database.query(
    "SELECT * FROM ADMIN WHERE id = ? AND pass = ?",
    [id, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "ADMIN DOES NOT EXIST" });
      }
    }
  );
});

module.exports = router;
