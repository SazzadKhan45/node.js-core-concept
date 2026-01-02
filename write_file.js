const fs = require("fs");

const content1 = "This next level contents. \n I love node.js";

try {
  fs.writeFileSync("./output/test-write-syc.txt", content1);
  console.log("File write syc");
} catch (error) {
  console.error(error.message);
}

//
const content2 = "This is write file too";
