
$(function () {
    
    
 //scrollspy menu	
    $('body').scrollspy({
        target: '.navbar',
        offset: 81
    });
    var htmlBody = $('html, body');
    
    //animation scroll js

    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                htmlBody.animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
    var windo = $(window);
    
    
    // this is for back to top
	
    var bc2top = $('.back-top-btn');
    bc2top.on('click', function () {
        htmlBody.animate({
            scrollTop: 0
        }, 1000);
    });
    windo.on('scroll', function () {
        var scrollPos = windo.scrollTop();
		
        if (scrollPos > 150) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });
    
    windo.on('load', function () {
		$("#preloader_1").delay(1000).fadeOut();
		$("#spinners").delay(1000).fadeOut("slow");
	});
    
    //nave top js
	var nav_navbar = $('nav.navbar'),
        $window = $(window),
        navOffset = nav_navbar.offset().top;

    $('.nav-wrapper').height(nav_navbar.outerHeight());
    
    $('ul.navbar-nav > li > a').on('click', function(){
        $('.navbar-collapse').removeClass('in');
        console.log('test');
    });
	
    
    // navbar js
    var myNavBar = {
        flagAdd: true,
        elements: [],
        init: function (elements) {
            this.elements = elements;
        },
        add: function () {
            if (this.flagAdd) {
                for (var i = 0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },
        remove: function () {
            for (var i = 0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
            }
            this.flagAdd = true;
        }
    };
    myNavBar.init([
    "header",
    "header-container",
    "brand"
]);
    function offSetManager() {
        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if (yOffset < currYOffSet) {
            myNavBar.add();
        } else if (currYOffSet == yOffset) {
            myNavBar.remove();
        }
    }
    window.onscroll = function (e) {
        offSetManager();
    }
    offSetManager();
});
 

// banner js
$('.banner_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
});

//  Counter js start 
jQuery('.statistic-counter').counterUp({
    delay: 10,
    time: 2000
});

// gallary js start
$('.gallery-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  autoplaySpeed: 2000,
  prevArrow: '.slick_prev',
  nextArrow: '.slick_next',
  responsive: [
    {
    breakpoint: 991,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
    }
},
    {
    breakpoint: 768,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
    }
},
    {
    breakpoint: 481,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
    }
}
  ]
});
  
// gallery portfolio 
$('.venobox').venobox(); 

// testimonial js
$('.clent').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dot:false,
  prevArrow:'<i class="fa fa-chevron-left slick_prev2"></i>',
  nextArrow:'<i class="fa fa-chevron-right slick_next2"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
  ]
});

// Chef js
$('.shap').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
    centerMode:true,
    centerPadding:"0",
	dot: false,
	arrows: false,
	asNavFor: '.shap_info',
	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },		
  ]
});

$('.shap_info').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.shap',
	dots: false,
	arrows: false,
});
   
//  blog js       
 $('.blog-slick').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	dot: false,
	prevArrow: '<i class="fa fa-chevron-left slick_prev"></i>',
	nextArrow: '<i class="fa fa-chevron-right slick_next"></i>',
	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
  ]
});


