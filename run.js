#!/usr/bin/env node

const fs = require('fs');
const sysPath = require("path");
const listTools = require("./list_tools");
const help = require("./tools/help/help");

if (process.argv.length < 3) {
  console.log("error: command expected\n");
  help.perform();
  process.exit(1);
}

const command = process.argv[2];

if (!listTools.listTools().includes(command)) {
  console.log(`error: no such command: ${command}\n`);
  help.perform();
  process.exit(1);
}

const tool = require(`./tools/${command}/${command}`);
try {
  tool.perform();
} catch (e) {
  console.err(e);
  process.exit(1);
}
