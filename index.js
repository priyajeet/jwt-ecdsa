#!/usr/bin/env node

const jwt = require("jsonwebtoken"); 
const fs = require("fs");
const { argv } = require("yargs");
const path = require("path");

const privateKey = fs.readFileSync(path.resolve(argv.privateKey));
const { payload } = argv;

console.log("\n=============== Payload ==============");
console.log(JSON.stringify(payload, null, 2));
console.log("\n================= JTW ================");
console.log(jwt.sign(payload, privateKey, { algorithm: "ES384" }));