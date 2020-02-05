$(document).ready(function() {

	// To top
	$(window).scroll(function() {
		if ($(this).scrollTop() != 0)
			$('#to-top').fadeIn();
		else
			$('#to-top').fadeOut();
	});
	$('#to-top').click(function() {
		$('body, html').animate({
			scrollTop: 0}, 800);
	});

	//Popup for book-online
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade',
		showCloseBtn: false
	});

	// Slick slider for trainers
	$('.trainers-slider').slick({
		slidesToShow: 3,
		infinite: true,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 1000,
		responsive: [
		{
			breakpoint: 992,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true
			}
		},
		{
			breakpoint: 576,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true
			}
		}]
	});

	// Inputmask for phone number in contact
	$('.form__input_phone').inputmask({"mask": "(999) 9999-9999"
	});

})
