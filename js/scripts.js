// Business Logic
var numbers = [];
var fifteens = [15, 30, 45, 60, 75, 90]
var fives = [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100]
var threes = [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57, 63, 66, 69, 72, 78, 81, 84, 87, 93, 96, 99]

var pingPong = function(countTo) {
  for (var i = 1; i <= countTo; i++) {
    numbers.push(i + "");
  }

  // var newNumbers = numbers.join(", ");
  //
  // if (countTo % 3 == 0) {
  //   for (var index = 0; index < newNumbers.length; index += 1) {
  //     var removeNumbers = threes[index];
  //
  //     for (var index2 = 0; index2 < newNumbers.length; index2 += 1) {
  //       newNumbers = newNumbers.replace(removeNumbers, "ping");
  //     }
  //   };
  //
  // } else if (countTo % 5 == 0) {
  //   for (var index = 0; index < newNumbers.length; index += 1) {
  //     var removeNumbers = fives[index];
  //
  //     for (var index2 = 0; index2 < newNumbers.length; index2 += 1) {
  //       newNumbers = newNumbers.replace(removeNumbers, "pong");
  //     }
  //   };
  //
  // } else if (countTo % 15 == 0) {
  //   for (var index = 0; index < newNumbers.length; index += 1) {
  //     var removeNumbers = fifteens[index];
  //
  //     for (var index2 = 0; index2 < newNumbers.length; index2 += 1) {
  //       newNumbers = newNumbers.replace(removeNumbers, "ping-pong");
  //     }
  //   };
  //
  // } else {
  //   console.log("meow");
  // }

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
