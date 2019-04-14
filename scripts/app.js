function sliderAnimation(event) {
  
  var containerWidth = $('.slide-btn-container').width();
  var paddingWidth = 30-4;
  var toSlidePx = containerWidth-$(event.target).width()-2;
  var animateTime = 100; 

  // check the slider button horizontal position
  if ($(event.target).position().left < 0.5 * containerWidth) {
    // animate the button to slide to right
    $('.slide-btn')
    .css({'right': paddingWidth+'px', 'left': ''});
    //.animate({ 'left': '+='+toSlidePx+'px' }, animateTime);
    // change background-color
    $('.slide-btn-container').css(
      'backgroundColor', 'rgba(76,149,153,0.2)'
    );
    // change message
    $('.slide-container-msg').html($('.slide-container-msg').html().replace('unlock','lock'));
    $('.slide-btn-msg').html('&#x2714;').css('color', '#4c9599');

  } else {
    
    $('.slide-btn')
    .css({'left': paddingWidth+'px', 'right': ''});
    //.animate({ 'left': '-='+toSlidePx+'px' }, animateTime);
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