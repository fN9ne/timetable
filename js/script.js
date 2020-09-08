function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
$(document).ready(function(){
	$('.menu-header__burger').click(function(){
		$('.menu-header__burger, .menu-header__body').toggleClass('_active')
	})
})
$(document).ready(function(){
	$('.labels__item_2').click(function(){
		if (!$('.page_2').hasClass('_active')) {
			$('.loader__container').addClass('_active')
			setTimeout(loaderClose, 1000)
		}
		$('.page_2').addClass('_active')
		$('.page_1').removeClass('_active')
		$('.page_3').removeClass('_active')
		$('.weektitle').html('2 Неделя')
		$('body').removeClass('_page3')
	})
	$('.labels__item_1').click(function(){
		if (!$('.page_1').hasClass('_active')) {
			$('.loader__container').addClass('_active')
			setTimeout(loaderClose, 1000)
		}
		$('.page_3').removeClass('_active')
		$('.page_1').addClass('_active')
		$('.page_2').removeClass('_active')
		$('.weektitle').html('1 Неделя')
		$('body').removeClass('_page3')
	})
	$('.labels__item_3').click(function(){
		if (!$('.page_3').hasClass('_active')) {
			$('.loader__container').addClass('_active')
			setTimeout(loaderClose, 1000)
		}
		$('.page_1').removeClass('_active')
		$('.page_3').addClass('_active')
		$('.page_2').removeClass('_active')
		$('body').addClass('_page3')
		$('.weektitle').html('Расписание звонков')
	})
	$('.labels__item_4').click(function(){
		$('body').toggleClass('_dark')
	})
})
function loaderClose() {
	$($('.loader__container')).removeClass('_active')
}