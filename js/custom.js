$(document).ready(function(){
	$('.launch-modal').on('click', function(e){
		 e.preventDefault();
		 $( '#' + $(this).data('modal-id') ).modal();
	});


	//menu-bg
	$(window).on('scroll',function(){
		if ($(window).scrollTop() > 0 ){
			$('#menu').addClass('menu-bg');
		} else {
			$('#menu').removeClass('menu-bg');
		}
	});

		

	    


	///scrolltop
	jQuery(".top").click(function(){
		jQuery("html").animate({'scrollTop' : 0 }, 1000);
			return false;
		});
	jQuery(window).scroll(function(){
		var durotto = jQuery(window).scrollTop();
			if(durotto > 200){
				jQuery(".top").slideDown();
			}
			else {
				jQuery(".top").slideUp();		
			}
	});

				

    $(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
      	autoplay:true,
      	autoplaySpeed:500,
        dotsSpeed:500,
        items:5,
        dotsEach:true,
        loop:true,
        responsiveClass: true,
			responsive:{
				0:{
					items: 1,
					nav: false,
					dots: true,
					loop:true
				},
				400:{
					items: 2,
					
					loop:true
				},
				768:{
					items: 3,
					
					loop:true
				},
				1000:{
					items: 5,
					
					loop:true
				}
			}
      });
     
    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
	}

		
	$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	$('.panel-group').on('shown.bs.collapse', toggleIcon);

    });


	    
	 $(".navbar ul li a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset( ) .top
	     }, 1000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});
	 $(".navbar ul  a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 1000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});

	 $("#header  a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 1000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});

	

	// Animation in animate.css
		new WOW().init();
	  
		$('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({
            'overflow': 'visible'
        });



            
            
	});