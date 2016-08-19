// Business Logic
var numbers = [];
var countTo = function(number) {
  for (var i = 1; i <= number; i++) {
    numbers.push(i + " ");
    console.log(numbers);
  }
}

// UI Logic
$(document).ready(function(){
  $("#input form").submit(function(event){
    event.preventDefault();
    number = parseInt($("input#number").val());
    var output = countTo(number);

    $("#ping-pong").text(output);
    $("#output").show();
  });

  $("#reset").click(function(event) {
    $("#output").hide();
  });

});
