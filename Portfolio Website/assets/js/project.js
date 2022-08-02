var quotes = [
"People often say that motivation doesn't last. Well, neither does bathing - that's why we recommend it daily. - Zig Ziglar", "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. - Dale Carnegie", "Your time is limited, so don't waste it living someone else's life. - Steve Jobs", "You can waste your lives drawing lines. Or you can live your life crossing them. - Shonda Rhimes", "Without hustle, talent will only carry you so far. - Gary Vaynerchuk", "I'd rather regret the things I've done than regret the things I haven't done. - Lucille Ball", "I didn't get there by wishing for it or hoping for it, but by working for it. - Estee Lauder", "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new. - Brian Tracy", "Perseverance is failing 19 times and succeeding the 20th. - Julie Andrews", "Failure after long perseverance is much grander than never to have a striving good enough to be called a failure. - George Eliot", "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill", "Don't let yesterday take up too much of today. - Will Rogers", "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. - Steve Jobs", "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen", "We may encounter many defeats but we must not be defeated. - Maya Angelou", "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang Von Goethe","Security is mostly a superstition. Life is either a daring adventure or nothing. - Life Quote by Helen Keller", "Creativity is intelligence having fun. - Albert Einstein", "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality. - Brian Tracy", "A room without books is like a body without a soul. - Marcus Tullius Cicero", "You don't have to be great to start, but you have to start to be great. - Zig Ziglar", "Do not despair of the mercy of Allah. - Al-Quran 39:53", "So verily with the hardship, there is a relief, verily with the hardship, there is a relief. – Al-Quran Ch 94:5-6", "So be patient. Indeed, the promise of ALLAH is truth - Al-Quran 30:60", "Our lord! Forgive me and my parrents, and (all) the believers on the day when the reckoning will be established - Al-Quran 14:41", "Stop chasing the money and start chasing the passion. – Tony Hsieh", "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit. – Conrad Hilton", "The only thing that overcomes hard luck is hard work. – Harry Golden", "The future belongs to those who believe in the beauty of their dreams. —Eleanor Roosevelt", "Don't watch the clock; do what it does. Keep going. —Sam Levenson", "Keep your eyes on the stars, and your feet on the ground. —Theodore Roosevelt", "When you want to succeed as bad as you want to breathe, then you'll be successful.-Eric Thomas", "Every great story on the planet happened when someone decided not to give up, but kept going no matter what.-Spryte Loriano", "It does not matter how slowly you go, so long as you do not stop.-Confucius", "Little minds are tamed and subdued by misfortune; but great minds rise above it.-Washington Irving", "Nothing is impossible, the word itself says 'I'm possible'!-Audrey Hepburn", "Perfection is not attainable, but if we chase perfection we can catch excellence.-Vince Lombardi", "Expect problems and eat them for breakfast.-Alfred A. Montapert", "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.-Jimmy Dean", "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.-Wayne Dyer", "The greatest achievement was at first, and for a time, but a dream.-Napoleon Hill", "The best way to predict the future is to create it.-Peter Drucker", "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.-Martha Stewart", "No matter how hard the past is, you can always begin again.-Jack Kornfield", "There are two primary choices in life; to accept conditions as they exist, or to accept the responsibility for changing them.-Dennis Waitely"
];

var introQuote = document.querySelector("h3");

function selectQuote() {
	var random = Math.floor(Math.random() * quotes.length);
	return quotes[random];
}

var selectedQuote = selectQuote();
introQuote.textContent = selectedQuote;

setTimeout(function() {
	$("body").addClass("loaded");
	$(".header-title").addClass("visible");
	$('h1').css("color","#222222")
}, 3000);

//art Background

var art = [
	'url("assets/art/art1.jpg")', 'url("assets/art/art2.jpg")', 'url("assets/art/art3.jpg")', 'url("assets/art/art4.jpg")', 'url("assets/art/art5.jpg")', 'url("assets/art/art6.jpg")', 'url("assets/art/art7.jpg")', 'url("assets/art/art8.jpg")', 'url("assets/art/art9.jpg")', 'url("assets/art/art10.jpg")', 'url("assets/art/art11.jpg")', 'url("assets/art/art12.jpg")', 'url("assets/art/art13.jpg")', 'url("assets/art/art14.jpg")', 'url("assets/art/art15.jpg")', 'url("assets/art/art16.jpg")', 'url("assets/art/art17.jpg")', 'url("assets/art/art18.jpg")', 'url("assets/art/art19.jpg")', 'url("assets/art/art20.jpg")', 'url("assets/art/art21.jpg")', 'url("assets/art/art22.jpg")', 'url("assets/art/art23.jpg")', 'url("assets/art/art24.jpg")', 'url("assets/art/art25.jpg")', 'url("assets/art/art26.jpg")', 'url("assets/art/art27.jpg")', 'url("assets/art/art28.jpg")', 'url("assets/art/art29.jpg")', 'url("assets/art/art30.jpg")', 'url("assets/art/art31.jpg")', 'url("assets/art/art32.jpg")', 'url("assets/art/art33.jpg")', 'url("assets/art/art34.jpg")', 'url("assets/art/art35.jpg")', 'url("assets/art/art36.jpg")', 'url("assets/art/art37.jpg")', 'url("assets/art/art38.jpg")', 'url("assets/art/art39.jpg")'
];



var artBackground = document.querySelectorAll(".artSquares");

for (var i=0; i<artBackground.length; i++) {
	artBackground[i].style.backgroundImage = art[i];
}


$('.artContainer a').click(function(e){
	e.preventDefault();
    var artIndex = $('.artContainer a').index(this);
    for(var i = 0; i<$(".desContainer").length; i++) {
    	$(".desContainer").addClass("artHidden");
    }

    var description = document.getElementsByClassName("desContainer")[artIndex];
  	description.classList.remove("artHidden");

  	$("body,html").animate({
		scrollTop: $(this.hash).offset().top
	}, 800);
    
});

var $activeSlide = $(".slideActive");
var $homeSlide = $(".homeSlide");
var $slideNavPrev = $(".slideNavPrev");
var $slideNavNext = $(".slideNavNext");
var $slideNavPrevAnchor = $(".slideNavPrev a");
var $slideNavNextAnchor = $(".slideNavNext a");
var $workContainer = $(".workContainer")
var $cloneWrapper = $(".cloneWrapper")

function init() {
	TweenLite.set($homeSlide.not($activeSlide), {autoAlpha: 0});
	TweenLite.set($slideNavPrev, {autoAlpha: 0.4});
}

init();

// $(".cloneWrapper").on("mousemove", function(e) {


// 	 var oX = Math.floor((e.offsetX/930) * 100);
// 	 var oY = Math.floor((e.offsetY/200) * 100);
// 	 // console.log(e.offsetX + "," + e.offsetY);

// 	$(".cloneWrapper").css("clipPath", "polygon(0 0, " + oX + "% 0, "+ oY + "% 100%, 0 100%)")
// });

function goToPrevSlide(slideOut, slideIn) {
	var tl = new TimelineLite(),
		slideOutH1 = slideOut.find("h2"),
		slideOutP = slideOut.find("p"),
		slideInH1 = slideIn.find("h2"),
		slideInP = slideIn.find("p"),
		index = slideIn.index(),
		size = $(".top .homeSlide").length;


		if (slideIn.length !== 0) {

			tl.set(slideIn, {y:"-100%", autoAlpha: 1, className: "+=slideActive"});
			tl.set(slideOut, {className: "-=slideActive"});
			tl.to([slideOutH1, slideOutP], 0.3, {y: "+=15px", autoAlpha:0, ease:Power3.easeInOut}, 0);
			tl.to(slideOut, .5, {y: "100%", ease:Power3.easeInOut}, 0);
			tl.to(slideIn, .5, {y: "+=100%", ease:Power3.easeInOut}, 0);
			tl.fromTo([slideInH1, slideInP], 0.3, {y: "-=20px", autoAlpha:0}, {autoAlpha:1, y:0, ease:Power1.easeInOut}, 0.3);
		};

	TweenLite.set($slideNavNext, {autoAlpha:1});
		
		if (index === 1) {
			TweenLite.to($slideNavPrev, .3, {autoAlpha:0.4});
	};
}

function goToNextSlide(slideOut, slideIn) {
	var tl = new TimelineLite(),
		slideOutH1 = slideOut.find("h2"),
		slideOutP = slideOut.find("p"),
		slideInH1 = slideIn.find("h2"),
		slideInP = slideIn.find("p"),
		index = slideIn.index(),
		size = $(".top .homeSlide").length;


		if (slideIn.length !== 0) {

			tl.set(slideIn, {y:"100%", autoAlpha: 1, className: "+=slideActive"});
			tl.set(slideOut, {className: "-=slideActive"});
			tl.to([slideOutH1, slideOutP], 0.3, {y: "-=15px", autoAlpha:0, ease:Power3.easeInOut}, 0);
			tl.to(slideOut, .5, {y: "-100%", ease:Power3.easeInOut}, 0);
			tl.to(slideIn, .5, {y: "-=100%", ease:Power3.easeInOut}, 0);
			tl.fromTo([slideInH1, slideInP], 0.3, {y: "+=20px", autoAlpha:0}, {autoAlpha:1, y:0, ease:Power1.easeInOut}, 0.3);
		};

	TweenLite.set($slideNavPrev, {autoAlpha:1});
		
	if (index === (size-1)) {
		TweenLite.to($slideNavNext, .3, {autoAlpha:0.4});
	};
}

$slideNavNext.click(function(e) {
	e.preventDefault();

	var slideOut = $(".homeSlide.slideActive"),
		slideIn = $(".homeSlide.slideActive").next(".homeSlide");

	goToNextSlide(slideOut, slideIn);
});

$slideNavPrev.click(function(e) {
	e.preventDefault();

	var slideOut = $(".homeSlide.slideActive"),
		slideIn = $(".homeSlide.slideActive").prev(".homeSlide");

	goToPrevSlide(slideOut, slideIn);
});

// $(document).mousemove(function(e) {
// 	var xPos = (e.offsetX/$(window).width()) - 0.5,
// 		yPos = (e.offsetY/$(window).height()) - 0.5;

// 	TweenLite.to($workContainer, 0.6, {rotationY:5*xPos, rotationX:5*yPos, ease:Power1.easeOut, transformPerspective: 900, transformOrigin: "center"});
	
// 	});


//scrolling

var smoothScroll = $(".scroll");

smoothScroll.click(function (e) {
	e.preventDefault();
	$("body,html").animate({
		scrollTop: $(this.hash).offset().top
	}, 1000);
});

//link switch

$(window).scroll(function() {
	var scrollbarLocation = $(this).scrollTop();

	smoothScroll.each(function() {
		if(smoothScroll.length) {
			var sectionOffset = $(this.hash).offset().top - 20;
			if( sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass("active");
				$(this).parent().siblings().removeClass("active");
		}
		}
		
	});

});

// travel

var travel = [
	'url("assets/travel/travel1.jpg")', 'url("assets/travel/travel2.jpg")', 'url("assets/travel/travel3.jpg")', 'url("assets/travel/travel4.jpg")'
];

var travelBackground = document.querySelectorAll(".travelSquares");

for (var i=0; i<travelBackground.length; i++) {
	travelBackground[i].style.backgroundImage = travel[i];
}

$('.travelContainer a').click(function(e){
	e.preventDefault();
    var travelIndex = $('.travelContainer a').index(this);
    for(var i = 0; i<$(".travelDesContainer").length; i++) {
    	$(".travelDesContainer").addClass("travelHidden");
    }

    var description = document.querySelectorAll(".travelDesContainer")[travelIndex];
  	description.classList.remove("travelHidden");
    
    $("body,html").animate({
		scrollTop: $(this.hash).offset().top
	}, 800);
});


