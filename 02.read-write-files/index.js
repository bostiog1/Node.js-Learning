const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }
);

console.log("Hello...");

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to meet you",
  (err) => {
    if (err) throw err;
    console.log("Write compelte");
  }
);

fs.appendFile(
  path.join(__dirname, "files", "test.txt"),
  "Testing text.",
  (err) => {
    if (err) throw err;
    console.log("Append compelte");
  }
);

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});
