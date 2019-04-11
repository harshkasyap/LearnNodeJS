// get the reference of EventEmitter class of events module
var events = require('events');
var util = require('util');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();

//Subscribe for FirstEvent
em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

em.on('SecondEvent', function (data) {
  console.log('Second subscriber: ' + data);
});

// Raising Events
em.emit('FirstEvent', 'This is my first Node.js event emitter example.', 'Multiple args.');
em.emit('SecondEvent', 'This is my second Node.js event emitter example.');

function LoopProcessor(num) {
  var me = this;

  setTimeout(function () {
      
      for (var i = 1; i <= num; i++) {
          me.emit('BeforeProcess', i);
          
          console.log('Processing number:' + i);
          
          me.emit('AfterProcess', i);
      }
  }
  , 2000)
      
  return this; 
}

util.inherits(LoopProcessor, require('events').EventEmitter)
var lp = new LoopProcessor(3);

lp.on('BeforeProcess', function (data) {
  console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
  console.log('Completed processing ' + data);
});