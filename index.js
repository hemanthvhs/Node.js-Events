const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on('sale', () => {
    console.log('There is a new sale');
});

myEmitter.on('sale', name => {
    console.log(`Consumer Name: ${name}`);
});

myEmitter.emit('sale', 'Hemanth Vennelakanti');
// Here we are passing "Hemanth Vennelakanti" as the parameter to the callback function when sale event is emitted
