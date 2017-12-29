$( document ).ready(function() {

	$('.navigation__button').on('click',function(e){
		e.preventDefault();
		$('.navigation__background').toggleClass('navigation__background--open');
		$('.navigation__nav').toggleClass('navigation__nav--open');
		$('.navigation__icon').toggleClass('navigation__icon-rotate');
	});



   $('.navigation__nav li a').on('click',function(e){
   	e.preventDefault();
   	  $('.navigation__background').removeClass('navigation__background--open');
	  $('.navigation__nav').removeClass('navigation__nav--open');
	  $('.navigation__icon').removeClass('navigation__icon-rotate');

   	  var link = $(this).data('link');
   	
   	  function animate(sectionId){
   	  	if( $('#'+sectionId).attr('id') == link ){
		   	  	$('html, body').animate({
			      scrollTop: $("#"+sectionId).offset().top
			      }, 1400);
	   	  }
   	  }
   	  animate(link);  
   });

   // Read more Link

   $('#read-more').click(function(){
      $('html, body').animate({
         scrollTop: $("#about-heading").offset().top
         }, 1400);
   });


   $('.close-projects').css('display','none');


   $('.more-projects').on('click',function(e){
   	e.preventDefault();
   		$('.projects-2').slideDown();
   		$('.close-projects').css('display','inline-block');
   		$('.more-projects').css('display','none');
   });

   $('.close-projects').on('click',function(e){
   	e.preventDefault();
   		$('.projects-2').slideUp();
   		$('.more-projects').css('display','inline-block');
   		$('.close-projects').css('display','none');
   		
   });


    $('.close-testimonial').css('display','none');

    $('.more-testimonial').on('click',function(e){
      e.preventDefault();
         $('.extra-testimonials').slideDown();
         $('.close-testimonial').css('display','inline-block');
         $('.more-testimonial').css('display','none');
   });

   $('.close-testimonial').on('click',function(e){
      e.preventDefault();
         $('.extra-testimonials').slideUp();
         $('.more-testimonial').css('display','inline-block');
         $('.close-testimonial').css('display','none');
         
   });



   // Making skills boxes div height same irrespective of their content height 

   

   // var maxHeight = Math.max.apply(Math,$('.skills-box').map(function () {
   //        return $(this).height(); 
   // }));
   // console.log(maxHeight);

   // $('.skills-box').each(function(){
     
   //    var divHeight = $(this).height();
   
   //    if (divHeight < maxHeight ) {
   //       divHeight = maxHeight ;
   //    }

   //    // Apply height & add total vertical padding
   //    $(".skills-box").css("height", divHeight);

   // });

  





});