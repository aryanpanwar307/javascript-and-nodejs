const cp = require('child_process');
const fs = require('fs');

//open calculater
cp.execSync('calc');

//open a website (this github repo)
cp.execSync('start chrome https://github.com/aryanpanwar307/javascript-and-nodejs');