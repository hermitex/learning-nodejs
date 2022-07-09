const http = require("http");
const { getAllUsers, getUserById } = require("./controllers/usersController");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    getAllUsers(req, res);
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getUserById(req, res, id);
  } else {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "NOT FOUND!" }));
  }
});

server.listen(PORT, () => console.log("listening on port " + PORT));
