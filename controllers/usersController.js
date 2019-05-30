const jwt = require("jsonwebtoken");
const {
  User
} = require("../models");
const handle = require("../utilities/promise-handler");

require('dotenv').config();
const secret = process.env.JWT_PWD;

// registering a new user
const register = (req, res) => {
  const {
    userName,
    firstName,
    lastName,
    password
  } = req.body;
  User.create({
    userName,
    firstName,
    lastName,
    password
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// logging in an existing user
const login = async (req, res) => {
  // getting userName and password
  const {
    userName,
    password
  } = req.body;
  console.log("it's here")

  // find the user
  const [findUserErr, userInfo] = await handle(User.findOne({ where: { userName } }));

  if (findUserErr) {
    console.log(findUserErr);
    res.status(500).json({
      error: "Ooops! Our bad. Please try again!"
    })
  } else if (!userInfo) {
    res.status(401).json({
      error: "Uh-oh, it seems like you have the wrong userName."
    })
  } else {
    const [pwErr, same] = await handle(userInfo.validPassword(password));

    if (pwErr) {
      res.status(500).json({
        error: "Our mistake, please try again"
      });
    } else if (!same) {
      res.status(401).json({
        error: "Hm, it seems like your password wasn't quite right"
      });
    } else {
      const payload = {
        id: userInfo.id,
        userName: userInfo.userName
      };
      // assign jwt
      const token = jwt.sign(payload, secret, {
        expiresIn: "24h"
      });

      // sending webtoken to the front end
      res.status(200).json(token);
    };
  };
};

// getting the user information
const getUserInfo = async (req, res) => {
  console.log("got here");
  console.log(req.id);
  const [userErr, userInfo] = await handle(User.findOne({
    where: {
      id: req.id
    }
  }));

  if (userErr) {
    console.log(userERrr);
    res.status(500).json(userErr);
  } else {
    res.status(200).json(userInfo);
  }
};

// delete user
const deleteUser = async (req, res) => {
  Post.destroy({
    where: {
      id: req.body.id
    }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
}

// exporting

module.exports = {
  getUserInfo,
  login,
  register,
  deleteUser
};