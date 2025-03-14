(function() {
	window.send = new window.Send({
		serverUrl: "/_components/sendMail/sendMail.php"
	});
})();

$(".spoiler-trigger").click(function() {
	var id = $(this).attr("data-spoiler_id");
	if (id) {
		$(id).collapse('toggle');
	} else {
		$(this).parent().next().collapse('toggle');
	}
});

$(".spoiler-trigger").click(function() {
	$(this).parent().next().collapse('toggle');
});


(function() {
	$(document).ready( function() {
		/*$('#slider .item').parallax("0%", 0.1, 0, false);*/
		
		$('#slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			arrows: true,
			nextArrow:"<div class = 'slick-next' style = 'width:22px;height:37px;background:url(/_res/img/arrows.png);background-position:right top;'> </div>",
			prevArrow:"<div class = 'slick-prev' style = 'width:22px;height:37px;background:url(/_res/img/arrows.png);background-position:left top;'> </div>",
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 8000,
			speed: 1000,
			fade: true,
			cssEase: 'linear',
			responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				slidesToShow: 1
			  }
			}
		  ]
		});
		
		$('#newsSlider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			arrows: true,
			nextArrow:"<div class = 'slick-next' style = 'width:22px;height:37px;right:-30px;background:url(/_res/img/arrows.png);background-position:right top;'> </div>",
			prevArrow:"<div class = 'slick-prev' style = 'width:22px;height:37px;left:-30px;background:url(/_res/img/arrows.png);background-position:left top;'> </div>",
			/*adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 8000,
			speed: 1000,
			fade: true,
			cssEase: 'linear',*/
			responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				slidesToShow: 1
			  }
			}
		  ]
		});
		
		$('#reviewsSlider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			arrows: true,
			nextArrow:"<div class = 'slick-next' style = 'width:22px;height:37px;right:-30px;background:url(/_res/img/arrows.png);background-position:right top;'> </div>",
			prevArrow:"<div class = 'slick-prev' style = 'width:22px;height:37px;left:-30px;background:url(/_res/img/arrows.png);background-position:left top;'> </div>",
			/*adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 8000,
			speed: 1000,
			fade: true,
			cssEase: 'linear',*/
			responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				slidesToShow: 1
			  }
			}
		  ]
		});
		
		$('#partnersSlider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 5,
			arrows: true,
			nextArrow:"<div class = 'slick-next' style = 'width:22px;top:40%;height:37px;right:-30px;background:url(/_res/img/arrows.png);background-position:right top;'> </div>",
			prevArrow:"<div class = 'slick-prev' style = 'width:22px;top:40%;height:37px;left:-30px;background:url(/_res/img/arrows.png);background-position:left top;'> </div>",
			/*adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 8000,
			speed: 1000,
			fade: true,
			cssEase: 'linear',*/
			responsive: [
			{
			  breakpoint: 1500,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
			  breakpoint: 1300,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				slidesToShow: 1
			  }
			},
		  ]
		});
		
		$('.gallery [data-slick="1"]').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			arrows: true,
			nextArrow:"<div class = 'slick-next' style = 'width:22px;top:40%;height:37px;right:-30px;background:url(/_res/img/arrows.png);background-position:right top;'> </div>",
			prevArrow:"<div class = 'slick-prev' style = 'width:22px;top:40%;height:37px;left:-30px;background:url(/_res/img/arrows.png);background-position:left top;'> </div>",
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 1000,
			fade: true,
			cssEase: 'linear',
			responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 450,
			  settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 1
			  }
			}
		  ]
		});

		$(".slick-next").hover(function(event) {
			var target = event.target;
			$(target).css({
				backgroundPosition: "right bottom"
			});
		});
		$(".slick-prev").hover(function(event) {
			var target = event.target;
			$(target).css({
				backgroundPosition: "left bottom"
			});
		});
		$(".slick-next").mouseout(function(event) {
			var target = event.target;
			$(target).css({
				backgroundPosition: "right top"
			});
		});
		$(".slick-prev").mouseout(function(event) {
			var target = event.target;
			$(target).css({
				backgroundPosition: "left top"
			});
		});
	});
})();

(function() {
	$(document).ready( function() {
		$('.gallery2').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			arrows: true,
			nextArrow:"<div class = 'slick-next' style = 'width:22px;height:37px;background:url(/_res/img/arrows.png);background-position:right top;'> </div>",
			prevArrow:"<div class = 'slick-prev' style = 'width:22px;height:37px;background:url(/_res/img/arrows.png);background-position:left top;'> </div>",
			adaptiveHeight: true,
			responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 450,
			  settings: {
				arrows: false,
				centerMode: true,
				slidesToShow: 1
			  }
			}
		  ]
		});

		$(".slick-next").hover(function(event) {
			var target = event.target;
			$(target).css({
				backgroundPosition: "right bottom"
			});
		});
		$(".slick-prev").hover(function(event) {
			var target = event.target;
			$(target).css({
				backgroundPosition: "left bottom"
			});
		});
		$(".slick-next").mouseout(function(event) {
			var target = event.target;
			$(target).css({
				backgroundPosition: "right top"
			});
		});
		$(".slick-prev").mouseout(function(event) {
			var target = event.target;
			$(target).css({
				backgroundPosition: "left top"
			});
		});
	});
})();

$(document).ready( function() {
	if (!window.message) window.message = new Message({css:{"backgroundColor":"#b3112c", "color":"#fff"}});
});

$(document).ready( function() {
	if (!window.modalForm) window.modalForm = new ModalForm({
		css: {
			"border-radius": "3px",
			"-moz-border-radius":"3px",
			"-webkit-border-radius":"3px"
		}
	}, function() {});
});
/*
//Поля ввода
(function() {
	window.setMask = function() {
		$(document).ready( function() {
			$(".clientEmail").val("Email");
			
			$(".clientEmail").focusout(function() {
				if (this.value.length < 5) this.value = "Email";
			});
			$(".clientEmail").focus(function() {
				this.value = "";
			});
		});
	}
	
	window.setMask();
})();
*/
/*Прокрутка*/
(function() {
	window.menuTopPos = getCoords(document.getElementById('mainMenuCarrier')).top;

	window.onscroll = window.onload = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		var clientHeight = document.documentElement.clientHeight;
		
		var top = getCoords(document.getElementById('mainMenuCarrier')).top;
		var menuHeight = $('#mainMenuCarrier').height() + "px";
		var el = document.getElementById('mainMenuCarrier');

		if (scrolled > window.menuTopPos) {
		//	document.getElementById("braker").style.marginTop = $('#mainMenuCarrier').height() + "px";
			document.getElementById("braker").style.marginTop = menuHeight;
			if (el.style.position != "fixed") {
				el.style.position = "fixed";
				el.style.top = "0px";
			}
		} else {
			if (el.style.position == "fixed") {
				window.menuTopPos = top;
				el.style.position = "static";
				el.style.top = "";
				document.getElementById("braker").style.marginTop = "0px";
				window.menuTopPos = getCoords(document.getElementById('mainMenuCarrier')).top;
			}
		}
		
		var upEl = document.getElementById('upButton');
		upEl.onclick = function() {
			if (window.jQuery) {
				$(document).ready(function() {
					$('html, body').stop().animate({scrollLeft: 0, scrollTop:$("body").offset().top}, 500);
				});
			} else {
				window.scrollTo(0,0);
			}
		}

		if (scrolled > 200) {
			upEl.style.display = "block";
		} else {
			upEl.style.display = "none";
		}
	}
})();
/*/Прокрутка*/
//---------------//


//---------------//
//отправка сообщений
(function() {
	window.sendMail = function(target) {
		send.query(target, {}, function() {
			try {
				yaCounter.reachGoal($(target).closest(".sendButton").attr('data-form_id')); //событие для yandex
			} catch (e) {
				console.log(e);
			}
		})
	}
	
	window.setSendButton = function(container) {
		if (!container) container = "";
		$(container + " .sendButton").on("click", function(event) {
			window.sendMail(event.target);
		});
	}
	
	$(document).ready( function() {
		window.setSendButton();
	});
})();