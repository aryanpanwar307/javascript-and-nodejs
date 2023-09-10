const cp = require('child_process');

//open calculater
cp.execSync('calc');

//open a website (this github repo)
cp.execSync('start chrome https://github.com/aryanpanwar307/javascript-and-nodejs');