#!/usr/bin/env node

const jwt = require("jsonwebtoken"); 
const fs = require("fs");
const { argv } = require("yargs");
const path = require("path");

const privateKey = fs.readFileSync(path.resolve(argv.privateKey));
console.log(jwt.sign({ foo: "bar" }, privateKey, { algorithm: "ES384" }));