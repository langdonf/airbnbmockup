(function ($) {

  function isMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      return true;
    } else {
      return false;
    }
  }

  function sliderAnimation(event) {
    
    // check the slider button horizontal position
    if ($(event.target).position().left <  0.5*$('.slide-btn-container').width()) {
      
      // animate the button to slide to right
      $('.slide-btn').attr('src', 'images/locked.png')
        .css({'right': '0px', 'left': ''});
      
      // change background-color
      $('.slide-btn-container').css( 'backgroundColor', 'rgba(76,149,153,0.2)');
      
      // change message
      $('.slide-container-msg').html($('.slide-container-msg').html().replace('unlock','lock'));
      $('.slide-btn-msg').css('color', '#4c9599');

    } else {
      
      $('.slide-btn').attr('src', 'images/unlocked.png')
        .css({'left': '0px', 'right': ''});
      $('.slide-btn-container').css('backgroundColor', 'white');
      $('.slide-container-msg').html($('.slide-container-msg').html().replace('lock','unlock'));
      $('.slide-btn-msg').css('color', '#484848');
    }
    
  }

  $(document).ready(function(){

    $('#modal_keylock').modal();

    if (isMobile()) {
      $('.slide-btn').swipe({'swipe': function(event) {
          sliderAnimation(event);
        }
      });
    } else {
      $('.slide-btn').click(function(event) {
        sliderAnimation(event);
      });
    }
    
  });

})(jQuery);
