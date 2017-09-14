$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var phoenix = $("#animal").val();
  var orca = $("#animal").val();
  var sasquatch = $("#animal").val();

  if (phoenix === "Phoenix") {
    $("#phoenixPage").show();
    $("#orcaPage").hide();
    $("#sasquatchPage").hide();
  }
    else if (orca === "Orca") {
    $("#orcaPage").show();
    $("#phoenixPage").hide();
    $("#sasquatchPage").hide();
  }
  else {
    $("#sasquatchPage").show();
    $("#phoenixPage").hide();
    $("#orcaPage").hide();


  }




    event.preventDefault();
  });
});
