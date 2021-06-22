# Event Emitters

Most of the Node.js core API's are built around event driven architecture in which certain kinds of objects (called emitters) emit 
named events that cause listeners to be called.

All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object.

https://stackblitz.com/edit/nodejs-events