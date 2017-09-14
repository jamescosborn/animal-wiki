function clearForm(){
  $("#animal").val("");
}
$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var phoenix = $("#animal").val();
  var orca = $("#animal").val();
  var sasquatch = $("#animal").val();

  if (phoenix === "Phoenix") {
    $(".hideResults").hide();
    $("#phoenixPage").show();
    //$("#orcaPage").hide();
    //$("#sasquatchPage").hide();
  }
    else if (orca === "Orca") {
      $(".hideResults").hide();

    $("#orcaPage").show();
    //$("#phoenixPage").hide();
    //$("#sasquatchPage").hide();
  }
  else {
    $(".hideResults").hide();

    $("#sasquatchPage").show();
    //$("#phoenixPage").hide();
    //$("#orcaPage").hide();


  }




    event.preventDefault();
    clearForm();
  });
});
