$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();

    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var born = $("input#born").val();
    var sweets = $("input:radio[name=sweets]:checked").val();
    var food = $("#food").val();
    var sweet= $("input#sweet").val();
    var color = $("#color").val();


    $(".first-name").text(firstName);
    $(".last-name").text(lastName);
    $(".born").text(born);
    $(".sweets").text(sweets);
    $(".food").text(food);
    $(".color").text(color);

    $("#result").show();

    event.preventDefault();
  });
});
