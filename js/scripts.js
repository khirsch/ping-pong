// Business Logic
var numbers = [];
var pingPong = function(countTo) {
  for (var i = 1; i <= countTo; i++) {
    numbers.push(i + "");
  }
};

// UI Logic
$(document).ready(function(){
  $("#input form").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("input#number").val());
    var output = pingPong(countTo);

    $("#ping-pong").text(numbers.join(", "));
    $("#output").show();
  });

  $("#reset").click(function(event) {
    $("#output").hide();
  });

});
