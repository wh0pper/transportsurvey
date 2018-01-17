$(document).ready(function(){
  $("form#transport_survey").submit(function(event) {
    console.log("clicked");
    event.preventDefault();
    $("span#work-responses").show();
    var workModes = []
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workMode = $(this).val();
      $("#work-responses").append(workMode + "<br>");
      workModes.push(workMode);
    });
    $("span#fun-responses").show();
    var funModes = []
      $("input:checkbox[name=fun-transportation]:checked").each(function() {
        var funMode = $(this).val();
        $("#fun-responses").append(funMode + "<br>");
        funModes.push(funMode);
    });
    $('#transport_survey').hide();
  });


});
