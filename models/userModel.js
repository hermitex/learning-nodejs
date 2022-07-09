const users = require("../data/users");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
}

function findById(id) {
    return new Promise((resolve, reject) => {
      const user = users.find(user => user.id === +id);
      resolve(user);
    });
  }

module.exports = {
    findAll,
    findById,
};
