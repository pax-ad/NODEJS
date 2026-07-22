//for showcasing the module.exports


const sum = (a,b) => a+b;
const mul = (a,b) => a*b;

//suppose we want to use this in another file

//write this
module.exports = "123";

//sending the content 
let obj  /*or module.exports */ = {
    sum : sum,
    mul : mul //we are exporting obj 
};

module.exports = obj;

//another way of writing
module.exports.sum = (a,b) => a + b;
//or
exports.sum=(a,b) => a + b;

exports = 5 ; //gives an error
//not show any error unless an object
