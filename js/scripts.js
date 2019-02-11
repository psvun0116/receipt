$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput= $("input#address").val();
    var locationInput = $("input#location").val();
    var dateInput = $("input#date").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".location").text(locationInput);
    $(".date").text(dateInput);

    $("#receipt").show();

    event.preventDefault();

  });
});
