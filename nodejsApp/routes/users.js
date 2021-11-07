var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  req.db
    .collection("users")
    .find()
    .toArray()
    .then((data) => {
      console.log("dtatata", data);
      res.json({ status: "success", result: data });
    })
    .catch((err) => {
      res.json({ status: "Error", description: err });
    });
});

//login;
router.post("/login", (req, res) => {
  console.log("loginsssssssssss possss", req);
  req.db
    .collection("users")
    .findOne({ $and: [{ email: req.body.email, password: req.body.password }] })
    .then((data) => {
      console.log("newwwwwwwwwwwww", data);
      if (data) {
        res.json({ status: "success" });
      } else {
        res.json({ status: "User not exist" });
      }
    });
});

//sign up
router.post("/signup", (req, res) => {
  console.log("signupppp");
  req.db
    .collection("users")
    .findOne({ email: req.body.email })
    .then((doc) => {
      if (doc) {
        res.json({ status: "User exists" });
      } else {
        const user = req.body;
        req.db
          .collection("users")
          .insertOne(user)
          .then((data) => {
            res.json({ status: "success" });
          });
      }
    });
});

module.exports = router;
