const userModel = require("../models/userModel");

const TestMe = (req, res) => {
  res
    .status(200)
    .json({ message: "All the best for your web development path!" });
};

const Postreq = (req, res) => {
  res.status(200).json({
    status: true,
    message: "congragulations...! this is your first simple post request",
  });
};

const PostData = (req, res) => {
  let id = req.body.userName;
  let pass = req.body.Password;

  const data = { id, pass };
  res.status(200).json({ status: true, message: data });
};
const TaskArray = (req, res) => {
  let arr = ["RANJEET", "SANJAY"];
  const Lastname = req.body.Lastname;
  arr.push(Lastname);

  res.status(200).json({ status: true, message: arr });
};

// interacting with DB
const CreateUser = async (req, res) => {
  let data = req.body;
  let saveData = await userModel.create(data);
  res.status(200).send({
    msg: saveData,
  });
};

const GetAllUser = async (req, res) => {
  let allData = await userModel.find();
  res.status(200).send({ AllUsersAre: allData });
};

const Empty = (req, res) => {
  return res.status(400).send({ status: false, message: "check your URL" });
};

const Query = (req, res) => {
  let marks = req.query;

  res.status(200).json({ msg: marks });
};

module.exports = {
  TestMe,
  Empty,
  Postreq,
  PostData,
  TaskArray,
  Query,
  CreateUser,
  GetAllUser,
};
