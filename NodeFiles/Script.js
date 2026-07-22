//for running the js file inside node repl

let n = 5 ;
for(let i = 0 ; i < n ; i++){
    console.log("hello",i);
}

//for process
console.log(process.argv);

//passing the arguments
let args = process.argv;
for (let i =0;i<args.length;i++){
    console.log("hello",args[i]); //args[i] is arguments inside the terminal
}

//for module.exports
const somevalue = require("./math");
console.log(somevalue);