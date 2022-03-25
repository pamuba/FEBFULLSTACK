let events = require('events')

// var emitter = new events.EventEmitter()

// emitter.on('click', function(msg){
//     console.log(msg)
// })

// //similar to click
// emitter.emit('click', 'The event is raised/emitted')

//import for inheritance
var util = require('util')

var Person = function(name){
    this.name = name
}

util.inherits(Person, events.EventEmitter)

var james = new Person('James')
james.on('speak', function(){
    console.log("Helllooooo!!!")
})

james.emit('speak')