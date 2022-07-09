const users = require("../data/users");
const { v4: uuuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === +id);
    resolve(user);
  });
}

async function create(user) {
  return new Promise((resolve, reject) => {
    const newUser = { id: uuuidv4(), ...user };
    users.push(newUser);
    writeDataToFile('./data/users.json', users);
    resolve(newUser);
  });
}

module.exports = {
  findAll,
  findById,
  create
};
