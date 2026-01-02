const fs = require("fs");

console.log("Start Reading ...........");

fs.readFile("./data/diary.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("Error happen :", error.message);
  }

  console.log("file content :");
  console.log(data);
});

console.log("This file read not syc - no blocking type");
