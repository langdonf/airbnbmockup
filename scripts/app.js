function sliderAnimation(event) {
  
  var containerWidth = $('.slide-btn-container').width();
  var paddingWidth = 0;

  console.log($(event.target).position().left);
  // check the slider button horizontal position
  if ($(event.target).position().left <  0.5*containerWidth) {
    // animate the button to slide to right
    $('.slide-btn').attr('src', 'images/locked.png')
      .css({'right': paddingWidth+'px', 'left': ''});
    
    // change background-color
    $('.slide-btn-container').css( 'backgroundColor', 'rgba(76,149,153,0.2)');
    
    // change message
    $('.slide-container-msg').html($('.slide-container-msg').html().replace('unlock','lock'));
    $('.slide-btn-msg').html('&#x2714;').css('color', '#4c9599');

  } else {
    
    $('.slide-btn').attr('src', 'images/unlocked.png')
      .css({'left': paddingWidth+'px', 'right': ''});
    $('.slide-btn-container').css(
      'backgroundColor', 'white'
    );
    $('.slide-container-msg').html($('.slide-container-msg').html().replace('lock','unlock'));
    $('.slide-btn-msg').html('&rAarr;').css('color', '#484848');
  }
  
}

$(document).ready(function(){

  $('.modal').modal();

  $('.slide-btn').click(function(event) {
    sliderAnimation(event);
  });
});