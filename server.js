const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let statusCode = 200;
  let filePath = "";
  let contentType = "text/html";
  if (req.url == "/" && req.method == "GET") {
    filePath = path.join(__dirname, "/pages/home.html");
  } else if (req.url == "/about" && req.method == "GET") {
    filePath = path.join(__dirname, "/pages/about.html");
  } else if (req.url == "/contact" && req.method == "GET") {
    filePath = path.join(__dirname, "/pages/contact.html");
  } else if (req.url == "/styles.css" && req.method == "GET") {
    filePath = path.join(__dirname, "/public/styles.css");
    contentType = "text/css";
  } else {
    statusCode = 404;
    filePath = path.join(__dirname, "/pages/404.html");
  }
  res.writeHead(statusCode, { "Content-Type": contentType });
  const pageData = fs.readFileSync(filePath)
  res.write(pageData);
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running....");
});
