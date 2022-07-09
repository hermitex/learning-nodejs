const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "NOT FOUND!" }));
  }
});

server.listen(PORT, () => console.log("listening on port " + PORT));
