function sayHello(name) {
    console.log("Hello " + name)
}

sayHello("mohit")

global.console.log();

var message = "";
global.message;

//console.log(global.message) // not work since the only scope of message is this file

console.log(module)
