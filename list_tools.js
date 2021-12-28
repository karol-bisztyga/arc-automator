const fs = require('fs');
const sysPath = require("path");

function listTools() {
  let path = __filename.split(sysPath.sep);
  path.pop();
  path = path.join(sysPath.sep);

  return fs.readdirSync(`${path}${sysPath.sep}tools`);
}

exports.listTools = listTools;
