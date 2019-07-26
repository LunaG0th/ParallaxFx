// $(document).ready(function() {
//     $('a.menu-icon').click(function() {
//       $('nav#main-menu').toggle();
//     });
// });

// (function ($) {
//     $(window).scroll(function() {
//           $('.box2').animate({
//             padding: "+= 100px",
          
//           });
//     });

// })(jQuery);


(function ($) {
  $(window).scroll(function () {
    parallax();
  });
  function parallax() {

    var wScroll = $(window).scrollTop();
    console.log('hello');

    $('.bckg').css('background-position', 'center '  + (wScroll * 0.8) + 'px')
    $('.img01').css('background-position', 'center ' + (wScroll * 0.5) + 'px');

  }
  // background opacity
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.bckg').css({'filter': 'blur(3px)'})
      $('.img01').css({ 'filter': 'blur(1px)' })
    }
    else {
      $('.bckg').css({ 'filter': 'blur(0px)'})
      $('.img01').css({ 'filter': 'blur(0px)' })
    }
  });

})(jQuery);


//   $('.img02' ).css('top', 25+(wScroll*0.08)+'%');
 //}



// $(window).scroll(function () {
//   var scrollTop = $(window).scrollTop();
//   console.log("scrollTop>>>" + scrollTop);
//   if (scrollTop == 0) {
//     $(".boxs").css({ "margin-top": "0px" });
//   } else {
//     $(".boxs").css({ "margin-top": ($(window).scrollTop()) + "px" });
//   }
// });

// $(window).scroll(function () {
//   $("#scrollingDiv").stop().animate({ 
//     "marginTop": ($(window).scrollTop() + 30) + "px" }, "slow");
// });