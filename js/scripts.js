$(document).ready(function() {
  $("#add").submit(function() {
    event.preventDefault();
    var ruby1 = $("#ruby").val();
    if (ruby1 === "yes")  {
    $(ruby).append(ruby1);
    }
    var php1 = $("#php").val();
    var java1 = $("#java").val();
    var css1 = $("#css").val();
    var c1 = $("#c").val();

    $("#results").show();
  });
});
