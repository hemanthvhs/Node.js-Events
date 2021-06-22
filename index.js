const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("sale", () => {
    console.log("There is a new sale");
})

myEmitter.on("newsale", (name) => {
    console.log(`Consumer Name: ${name}`);
})

myEmitter.emit("sale");
myEmitter.emit("newsale", "Hemanth Vennelakanti");
// Here we are passing "Hemanth Vennelakanti" as the parameter to the callback function when sale event is emitted