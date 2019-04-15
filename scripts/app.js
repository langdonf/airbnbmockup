function sliderAnimation(event) {
    var containerWidth = $('.slide-btn-container').width();
    console.log($(event.target).position().left);
    
    if ($(event.target).position().left < containerWidth/2.0) {
      
      $('.slide-container-msg').html($('.slide-container-msg').html().replace('unlock','lock'));
      $('.slide-btn').animate({
        'left': parseFloat(containerWidth-$(event.target).width()-2)+'px' 
      });
      console.log($(event.target).position());
      $('.slide-btn-container').css(
        'backgroundColor', 'rgba(76,149,153,0.2)'
      );
      
  
    } else {
      
      $('.slide-container-msg').html($('.slide-container-msg').html().replace('lock','unlock'));
      $('.slide-btn').animate({
        'left': '-3px' 
      });
      $('.slide-btn-container').css(
        'backgroundColor', 'white'
      );
      
      console.log($(event.target).position());
    }
    
  }
  
  $(document).ready(function(){
  
    $('.modal').modal();
  
    $('.slide-btn').click(function(event) {
      sliderAnimation(event);
    });
  });