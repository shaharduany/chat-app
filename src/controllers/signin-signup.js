const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require("jsonwebtoken");

const authConfig = require("../../config/auth-config");
const User = require("../models/User");
const MESSAGES = require("../messages");
const Room = require("../models/Room");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 8);
};

const convertIdsToRooms = async (rooms) => {
  let collection = [];
  for (let room of rooms) {
    const val = await Room.findById(room);
    const obj = {
      name: val.name,
      guests: val.guests,
      messages: val.messages,
      id: val._id,
    };
    console.log(`${obj.name}`);
    collection.push(obj);
  }
  console.log(collection);
  return collection;
};

function getToken(user) {
  return jwt.sign({ id: user._id }, authConfig.secret, {
    expiresIn: authConfig.oneDay,
  });
}

module.exports.signup = (req, res) => {
  let email = req.body.email;
  let password = hashPassword(req.body.password);
  let username = req.body.username;

  console.log(`email > ${email} \t password > ${password}`);

  let user = new User({
    email: email,
    password: password,
    username: username,
  });

  user.save((err, user) => {
    if (err) {
      res.status(400).send({ message: err });
      console.log(err);
      return;
    }

    let token = getToken(user);

    let vals = {
      status: 200,
      message: MESSAGES.CREATED,
      id: user._id,
      username: user.username,
      email: user.email,
      rooms: user.rooms,
      accessToken: token,
    };

    console.log(MESSAGES.CREATED);
    res.status(200).send(vals);
  });
};

module.exports.signin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let user = await User.findOne({ email: email });

  if (!user) {
    console.log(MESSAGES.NOT_FOUND);
    res.status(404).send({ message: MESSAGES.NOT_FOUND, status: 404 });
    return;
  }

  let validPassword = bcrypt.compareSync(password, user.password);

  if (!validPassword) {
    console.log(MESSAGES.INVALID_PASSWORD);
    return res.status(404).send({
      status: 404,
      accessToken: null,
      message: MESSAGES.INVALID_PASSWORD,
    });
  }
  let token = getToken(user);

  let vals = {
    message: MESSAGES.LOGGED_IN,
    id: user._id,
    status: 200,
    username: user.username,
    email: user.email,
    rooms: user.rooms,
    accessToken: token,
  };

  res.status(200).json(vals);
};

module.exports.checkDuplicatedEmail = (req, res, next) => {
  const email = req.body.email;

  User.findOne({
    email: email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: MESSAGES.EMAIL_IN_USE });
      return;
    }
    console.log("finished duplicate emails");
    next();
  });
};

module.exports.logout = async (req, res) => {
  //If required fill up later
};
