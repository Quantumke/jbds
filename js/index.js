$(function() {
  $('.button-starter').hover(function() {
    $('.banner-starter').css('background-color', 'green');
  }, function() {
    // on mouseout, reset the background colour
    $('.banner-starter').css('background-color', '#EFF0F4');
  });
});

$(function() {
  $('.button-best-option').hover(function() {
    $('.banner-best-option').css('background-color', 'orange');
  }, function() {
    // on mouseout, reset the background colour
    $('.banner-best-option').css('background-color', '#EFF0F4');
  });
});
$(function() {
  $('.button-last-option').hover(function() {
    $('.banner-last-option').css('background-color', 'orangered');
  }, function() {
    // on mouseout, reset the background colour
    $('.banner-last-option').css('background-color', '#EFF0F4');
  });
});


