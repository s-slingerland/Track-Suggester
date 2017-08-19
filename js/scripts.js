$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var ruby1 = $("select#ruby").val();
    if (ruby1 === "yes")  {
      $("ul").append("<li>ruby!</li>");
    }
    var php1 = $("select#php").val();
    if (php1 === "yes")  {
      $("ul").append("<li>php!</li>");
    }
    var java1 = $("select#java").val();
    if (java1 === "yes")  {
      $("ul").append("<li>javascript!</li>");
    }

    var css1 = $("select#css").val();
    if (css1 === "yes")  {
      $("ul").append("<li>css!</li>");
    }

    var c1 = $("select#c").val();
    if (c1 === "yes")  {
      $("ul").append("<li>c#!</li>");
    }


    if (c1 === "no" && css1 ==="no" && java1 === "no" && ruby1 === "no" && php1 === "no") {
      $("#noResults").show();

    }
    else $("#results").show();

    })
  });
;
