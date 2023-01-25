// Define the byeSpeaker and helloSpeaker objects and the speak method
var byeSpeaker = {
  speak: function(name) {
    console.log("Goodbye " + name);
  }
};

var helloSpeaker = {
  speak: function(name) {
    console.log("Hello " + name);
  }
};

// IIFE
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array and say either 'Hello' or "Good Bye"
  for (var i = 0; i < names.length; i++) {

    // Retrieve the first letter of the current name in the loop.
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Compare the first letter to lowercase 'j'
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
