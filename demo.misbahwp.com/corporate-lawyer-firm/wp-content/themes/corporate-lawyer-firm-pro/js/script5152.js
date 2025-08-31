
/* ===============================================
  Open header search
=============================================== */

function corporate_lawyer_firm_pro_open_search_form() {

  jQuery('.header-search .search-form').addClass('is-open');
  jQuery('body').addClass('no-scrolling');
  setTimeout(function(){
     jQuery('.search-form  #header-searchform input#header-s').filter(':visible').focus();
     jQuery('.close-search-form').show();
  }, 100);

  return false;
}

jQuery( ".header-search a.open-search-form").on("click", corporate_lawyer_firm_pro_open_search_form);

/* ===============================================
  Close header search
=============================================== */

function corporate_lawyer_firm_pro_close_search_form() {
  jQuery('.header-search .search-form').removeClass('is-open');
  jQuery('body').removeClass('no-scrolling');
  jQuery('.close-search-form').hide();
}

jQuery( ".header-search a.close-search-form").on("click", corporate_lawyer_firm_pro_close_search_form);




/* ===============================================
 PRELOADER
=============================================== */

jQuery(window).load(function(){
  jQuery('.cssloader').fadeOut('slow',function(){jQuery(this).remove();});
});

/* ===============================================
  Open header search
=============================================== */

function corporate_lawyer_firm_pro_open_search_form() {

  jQuery('.header-search .search-form').addClass('is-open');
  jQuery('body').addClass('no-scrolling');
  setTimeout(function(){
     jQuery('.search-form  #header-searchform input#header-s').filter(':visible').focus();
     jQuery('.close-search-form').show();
     jQuery('.search-form #searchform #search').focus();
  }, 100);

  return false;
}

jQuery( ".header-search a.open-search-form").on("click", corporate_lawyer_firm_pro_open_search_form);


/* ===============================================
  Close header search
=============================================== */

function corporate_lawyer_firm_pro_close_search_form() {
  jQuery('.header-search .search-form').removeClass('is-open');
  jQuery('body').removeClass('no-scrolling');
  jQuery('.close-search-form').hide();
}

jQuery( ".header-search a.close-search-form").on("click", corporate_lawyer_firm_pro_close_search_form); 

 
/* ===============================================
	TRAP TAB FOCUS ON MODAL SEARCH
============================================= */

jQuery('.search-form #searchform #search').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form #searchform :input.search-submit').focus();
  }
});

jQuery('.search-form #searchform :input.search-submit').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form a.close-search-form').focus();
  }
});

jQuery('.search-form a.close-search-form').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form #searchform #search').focus();
  }
});
 

/* ===============================================
	OWL CAROUSEL SLIDER SECTION 
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#slider .owl-carousel');
    owl.owlCarousel({
    nav: false,  
    margin:0,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:true,
    onInitialized: updateDots,
    onChanged: updateDots,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1,
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
  function updateDots(event) {
    var itemsCount = event.item.count;
    jQuery('.owl-dots .owl-dot').each(function(index) {
      jQuery(this).html('<span>' + 0 + (index + 1) + '</span>');
    });
  }

  });

 
/* ===============================================
	OWL CAROUSEL OUR FEATURES SECTION 
=============================================== */


jQuery('document').ready(function(){
  var owl = jQuery('#our_features .owl-carousel');
    owl.owlCarousel({
    nav: false,
    margin:0,
    autoplay : false,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 6
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});


/* ===============================================
	OWL CAROUSEL OUR Counter SECTION 
=============================================== */


jQuery('document').ready(function(){
  var owl = jQuery('#counter_sec .owl-carousel');
    owl.owlCarousel({
    nav: false,
    margin:0,
    autoplay : false,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: false,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 4
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});


/* ===============================================
	OWL CAROUSEL Our TeamS SECTION 
=============================================== */


jQuery('document').ready(function(){
  var owl = jQuery('#our_team .owl-carousel');
    owl.owlCarousel({
    nav: false,
    margin:20,
    autoplay : false,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 3
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});



/* ===============================================
	OWL CAROUSEL Our TeamS SECTION 
=============================================== */


jQuery('document').ready(function(){
  var owl = jQuery('#case_studies .owl-carousel');
    owl.owlCarousel({
    nav: false,
    margin:20,
    autoplay : false,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});



/* ===============================================
	OWL CAROUSEL TESTIMONILAS SECTION 
=============================================== */


jQuery('document').ready(function(){
  var owl = jQuery('#testimonials .owl-carousel');
    owl.owlCarousel({
    nav: false,
    margin:0,
    autoplay : false,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      },
      1200: {
        items: 1
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});


/* ===============================================
  OWL CAROUSEL TESTIMONILAS SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#latest_news .owl-carousel');
    owl.owlCarousel({
      nav: false,
      margin:20,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        },
        1200: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
  });
});


/* ===============================================
  OWL CAROUSEL OUR BOOKS SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#our_books .owl-carousel');
    owl.owlCarousel({
      nav: false,
      margin:20,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        },
        1200: {
          items: 4
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
  });
});

 
/* ===============================================
  SCROLL TO TOP BUTTON
=============================================== */
var btn = jQuery('#button_scroll');

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({scrollTop:0}, '300');
});



/* ===============================================
  OPEN Menu
============================================= */

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* ===============================================
 STICKY HEADER
=============================================== */
  
jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > 0){  
    jQuery('#site-navigation').addClass("fix-sticky");
  }
  else{
    jQuery('#site-navigation').removeClass("fix-sticky");
  }
});


/* ===============================================
 FAQ SECTION
=============================================== */

(function () {
  "use strict";
  var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
    return function (arg) {
      if (this.length > 1) {
        this.each(function () {
          var $this = jQuery(this);

          if (!$this.data(ident)) {
            $this.data(ident, func($this, arg));
          }
        });

        return this;
      } else if (this.length === 1) {
        if (!this.data(ident)) {
          this.data(ident, func(this, arg));
        }

        return this.data(ident);
      }
    };
  });
})();

(function () {
  "use strict";
  function Accordion($roots) {
    var element = $roots;
    var accordion = $roots.first("[data-accordion]");
    var accordion_target = $roots.find("[data-accordion-item]");
    var accordion_content = $roots.find("[data-accordion-content]");
    jQuery(accordion_target).click(function () {
      jQuery(this).toggleClass("opened");
      jQuery(this).find(accordion_content).slideToggle("slow");
      jQuery(this).siblings().find(accordion_content).slideUp("slow");
      jQuery(this).siblings().removeClass("opened");
    });
  }
  jQuery.fn.Accordion = jQueryPlugin("Accordion", Accordion);
  jQuery("[data-accordion]").Accordion();

  function Ripple_Button($root) {
    var elements = $root;
    var ripple_btn = $root.first("[data-ripple]");
    jQuery(ripple_btn).on("click", function (event) {
      event.preventDefault();
      var $div = $("<div/>"),
        btnOffset = ripple_btn.offset(),
        xPos = event.pageX - btnOffset.left,
        yPos = event.pageY - btnOffset.top;
      $div.addClass("ripple-effect");
      $div.css({
        height: ripple_btn.height(),
        width: ripple_btn.height(),
        top: yPos - $div.height() / 2,
        left: xPos - $div.width() / 2,
        background: ripple_btn.data("ripple") || "#ffffff26"
      });
      ripple_btn.append($div);

      window.setTimeout(function () {
        $div.remove();
      }, 2000);
    });
  }
  jQuery.fn.Ripple_Button = jQueryPlugin("Ripple_Button", Ripple_Button);
  jQuery("[data-ripple]").Ripple_Button();
})();


/* ===============================================
  COUNTER SECTION
============================================= */
   
jQuery(document).ready(function() {

  var counters = jQuery(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 0);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});


/* ===============================================
  TABS
=============================================== */

jQuery(document).ready(function () {
  jQuery( "#case_studies .tablinks" ).first().addClass( "active" );
   jQuery( "#case_studies .tabcontent" ).first().addClass( "active" );
});

function corporate_lawyer_firm_pro_case_studies_tabs(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  jQuery('#'+ cityName).show()
  evt.currentTarget.className += " active";
}