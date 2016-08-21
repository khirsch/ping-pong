// Business Logic
var pingPong = function(input) {

  var output = "";
  for (var i = 1; i <= input; i++) {

    if (i % 15 === 0){
      output += "ping-pong" + " ";
    } else if (i % 5 === 0) {
      output += "pong" + " ";
    } else if (i % 3 === 0) {
      output += "ping" + " ";
    } else {
      output += i + " ";
    }
  }

  return output;

};

// UI Logic
$(document).ready(function(){

  $("#input form").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("input#number").val());
    var output = pingPong(countTo)

    if (!countTo) {
      alert("You must enter a number to play.")
    } else {
      $("#ping-pong").append(output);
      $("#output").show();
    }
  });

  $("#reset").click(function(event) {
    $("#output").hide();
  });

});
