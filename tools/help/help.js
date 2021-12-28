const listTools = require('../../list_tools')

let str = '';
str += "arcanist automator help\n";
str += "- to run a specific command, do:\n";
str += "    npx arc-automator [command]\n";
str += "- available commands:\n";
str += listTools.listTools().join('\n')

exports.help = str;
exports.perform = () => { console.log(str); }
