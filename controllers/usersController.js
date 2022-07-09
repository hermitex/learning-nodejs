const User = require("../models/userModel");

async function getAllUsers(res, res) {
  try {
    const users = await User.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } catch (error) {
    console.error(error);
  }
}

async function getUserById(req, res, id) {
  try {
    const user = await User.findById(id);
    if (user) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "User not found!" }));
    }
  } catch (error) {
    console.error(error);
  }
}

async function createUser(req, res) {
  try {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", async () => {
      const { first_name, city, state, postcode } = JSON.parse(body);
      const user = { first_name, city, state, postcode };
      let newUser = await User.create(user);
      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(newUser));
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
