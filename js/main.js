$(function(){

	$('.carousel__inner').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		responsive: [
		{
			breakpoint: 841,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 601,
			settings: {
				slidesToShow: 1,
			}
		},
		]
	});

});


const openPopUp = document.getElementById('open-pop-up')
const openPopUp2 = document.getElementById('open-pop-up2')
const closePopUp = document.getElementById('close-pop-up')
const popUp = document.getElementById('pop-up')

openPopUp2.addEventListener('click',function (e) {
	e.preventDefault()
	popUp.classList.add('active');

})

openPopUp.addEventListener('click',function (e) {
	e.preventDefault()
	popUp.classList.add('active');

})

closePopUp.addEventListener('click', function () {
	popUp.classList.remove('active');
})

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

arrowTop.onclick = function() {
	window.scrollTo(pageXOffset, 0);
	// после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
	arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});