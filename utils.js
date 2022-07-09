const fs = require("fs");

function writeDataToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (error) => {
    if (error) throw error;
  });
}

module.exports = {
    writeDataToFile
}
