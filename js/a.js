$(document).ready(function() {

    $(".preloader").css("display", "none");
 
    //скролл к ссылкам
 
   $("a.topLink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
 
    //анимация активных ссылок
    
    $(window).scroll(() => {
               let scrollDistance = $(window).scrollTop();


               $('.section').each((i, el) => {

                   if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                       $('nav a').each((i, el) => {
                           if ($(el).hasClass('active')) {
                               $(el).removeClass('active');
                           }
                       });

                       $('nav li:eq(' + i + ')').find('a').addClass('active');
                   }

               });
           });
 
});