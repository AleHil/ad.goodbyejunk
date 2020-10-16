(function($) {
	/* sticky header scripts */
	navBar = $("nav.navbar");
	// on load get height of the nav and add it to the height of the hero section
	navBar.next().children(":first").css('padding-top',  parseInt( navBar.next().children(":first").css('padding-top') )+ navBar.height());
	// if window is scrolled make background solid
	$(window).on("scroll load", function() {
		isTop = $(window).scrollTop();
		if (isTop == 0) {
			navBar.removeClass('scrolled');
		} else {
			navBar.addClass('scrolled');
		}
	});


	// Smooth scrolling
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top - 4 - ($('nav.navbar').height()*2)
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});




	setTimeout(function() {


//        $('.slider-carousel').slick({
//          dots: true,
//          infinite: true,
//          speed: 300,
//          slidesToShow: 1,
//          adaptiveHeight: false
//        });

		$('.slider-carousel').flickity({
			// options
			pageDots: true,
			adaptiveHeight: false,
			autoPlay: 8000,
			groupCells: true,
			groupCells: 2,
			pauseAutoPlayOnHover: false
		});

		$('.testimonial-carousel').flickity({
			// options
			pageDots: false,
			adaptiveHeight: false,
			autoPlay: 8000,
			pauseAutoPlayOnHover: false
		});

	}, 1000);

})( jQuery );


function getCurrentMonth() {
	var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var now       = new Date();
	var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
	var output = document.getElementById('output');

	if(output.textContent !== undefined) {
		output.textContent = thisMonth;
	}
	else {
		output.innerText = thisMonth;
	}
}
getCurrentMonth();