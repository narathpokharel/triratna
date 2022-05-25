//login and register user
const User = require("../models/User.model");
//login controller
module.exports.Login = (req, res) => {
  User.findOne(
    { email: req.body.email, password: req.body.password },
    (err, user) => {
      if (err) {
        res.send(err);
      }
      if (user) {
        res.json(user);
      } else {
        res.json({ message: "User not found" });
      }
    }
  );
};
//register controller
module.exports.Register = (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) {
      res.send(err);
    }
    if (user) {
      res.json(user);
    } else {
      res.json({ message: "User not found" });
    }
  });
};
