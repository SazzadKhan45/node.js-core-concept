const { error } = require("console");
const fs = require("fs");

const conten1 = "This is a content \n node js awesome";

try {
  fs.writeFileSync("./output/test-write-syc.txt", conten1);
  console.log("File written sync");
} catch (error) {
  console.error(error.message);
}

//
const content2 = "This is a content too, \n  async!!!!!";

fs.writeFile("./output/test-write-syc.txt", content2, (error) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log("File written asynchronously");
  }
});
