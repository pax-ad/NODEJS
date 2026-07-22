//since we want to export Fruits directory we create this index.js file in it

//other files will be "require" then be exported

const apple = require("../apple");
const banana= require("./banana");
const orange= require("./orange");

let fruits = {
    apple,banana,orange
};

module.exports =fruits;