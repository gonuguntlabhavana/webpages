$(function(){
  // Tabs
  $("#tabs").tabs();

  // Slider
  $("#slider").slider({
    value: 50,
    min: 0,
    max: 100,
    slide: function(event, ui){
      $("#sliderVal").text(ui.value);
    }
  });
  // Modal
  $("#openModal").on("click", function(){
    $("#dialog").dialog({ modal: true });
  });
});
