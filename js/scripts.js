$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var ruby1 = $("select#ruby").val();
    if (ruby1 === "yes")  {
      $(".ruby").show();
    }
    else {
      $(".ruby").hide();
    }
    var php1 = $("select#php").val();
    if (php1 === "yes")  {
      $(".php").show();
    }
    else {
      $(".php").hide();
    }
    var java1 = $("select#java").val();
    if (java1 === "yes")  {
      $(".java").show();
    }
    else {
      $(".java").hide();
    }
    var css1 = $("select#css").val();
    if (css1 === "yes")  {
      $(".css").show();
    }
    else {
      $(".css").hide();
    }
    var c1 = $("select#c").val();
    if (c1 === "yes")  {
      $(".c").show();
    }
    else {
      $(".c").hide();
    }

    $("#results").show();
  });
});
