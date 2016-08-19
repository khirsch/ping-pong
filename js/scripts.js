// Business Logic



// UI Logic
$(document).ready(function(){
  $("#input form").submit(function(event){
    event.preventDefault();
    number = $("input#number").val();
    // var output = manipulate(number);

    $("#ping-pong").text(number);
    $("#output").show();
  });

  $("#reset").click(function(event) {
    $("#output").hide();
  });

});
