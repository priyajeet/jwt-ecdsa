#!/usr/bin/env node

const jwt = require("jsonwebtoken"); 
const fs = require("fs");
const { argv } = require("yargs");
const path = require("path");

let publicKey = null;
if (argv.publicKey) {
    publicKey = fs.readFileSync(path.resolve(argv.publicKey));
}
const privateKey = fs.readFileSync(path.resolve(argv.privateKey));
const { payload } = argv;
const token = jwt.sign(payload, privateKey, { algorithm: "ES384" });

console.log("\n------------------- Payload -----------------");
console.log(JSON.stringify(payload));
console.log("------------------- Payload -----------------");
console.log("\n--------------------- JTW -------------------");
console.log(token);
console.log("--------------------- JTW -------------------");

if (publicKey) {
    console.log("\n------------------- Decode ------------------");
    console.log(jwt.decode(token));
    console.log("------------------- Decode ------------------");

    console.log("\n------------------- Verify ------------------");
    console.log(jwt.verify(token, publicKey, { algorithms: ["ES384"] }));
    console.log("------------------- Verify ------------------\n");
}