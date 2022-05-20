var fs = require("fs");

fs.readFile('002_input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program has ended");