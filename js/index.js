$(function() {
  $('.button-get-this').hover(function() {
    $('.select-plan-banner').css('background-color', 'green');
  }, function() {
    // on mouseout, reset the background colour
    $('.select-plan-banner').css('background-color', '#EFF0F4');
  });
});