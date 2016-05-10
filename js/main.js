$(document).ready(function(){
    
    // YURI - add a sneaky script that always updates website ... at least in theory 
    $(".dateTime").text(function(){
        var dateObj = new Date();
        var year = dateObj.getUTCFullYear();
        return year;
    });

    $('.features div:last, .newsletters div:last, .about-work > div:last, .team > div:last, .related-post > div:last').addClass('last');
    
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });

    //Menu
    jQuery('#menu').superfish({ 
        delay:       1000,                           
        animation:   {opacity:'show', height:'show'}, 
        speed:       'fast',                          
        autoArrows:  true

    });
    $('.sf-sub-indicator').remove();
    (function() {
		var $menu = $('#menu'),
			optionsList = '<option value="" selected>Menu...</option>';

		$menu.find('li').each(function() {
			var $this   = $(this),
				$anchor = $this.children('a'),
				depth   = $this.parents('ul').length - 1,
				indent  = '';

			if( depth ) {
				while( depth > 0 ) {
					indent += ' - ';
					depth--;
				}
			}
			optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
		}).end()
		  .after('<select class="res-menu">' + optionsList + '</select>');

		$('.res-menu').on('change', function() {
			window.location = $(this).val();
		});
		
	})();
    
    
    //prettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto({
			social_tools: false,
			show_title: false, /* true/false */
			autoplay: false, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			ie6_fallback: true,
	});
    
    
    //Portfolio Image Hover
    $('div.border-img a, .gallery li a').css({ opacity: 0 });
    $(".portfolio li, div.border-img:not(.not-hover)").hover(function () {						 
    	$(this).find("img").stop(true, true).animate({ opacity: 0.7 }, 300);
        $(this).find("a.img-view").animate({left: 50+'%', marginLeft: -41+'px', opacity: 1}, 300, 'easeOutQuart');
        $(this).find("a.img-link").animate({right: 50+'%', marginRight: -41+'px', opacity: 1}, 300, 'easeOutQuart');
    }, function() {
    	$(this).find("img").stop(true, true).animate({ opacity: 1 }, 300);
        $(this).find("a.img-view").animate({left: -36+'px', marginLeft: 0, opacity: 0 });
        $(this).find("a.img-link").animate({right:  -36+'px', marginRight: 0, opacity: 0 });
    });

	
    //Portfolio Image Hover
    $("img.border-img:not(.not-hover)").hover(function () {						 
    	$(this).stop(true, true).animate({ opacity: 0.7 }, 800);
    }, function() {
    	$(this).stop(true, true).animate({ opacity: 1 }, 800);
    });

    //Gallery Image Hover
    $(".gallery li").hover(function () {	
        $(this).find("img").stop(true, true).animate({ opacity: 0.7 }, 300);
    	$(this).find("a.img-view").animate({left: 50+'%', marginLeft: -18+'px', opacity: 1}, 300, 'easeOutQuart');
    }, function() {
    	$(this).find("a.img-view").animate({left: -36+'px', marginLeft: 0, opacity: 0 });
        $(this).find("img").stop(true, true).animate({ opacity: 1 }, 300);
    });
    
    //Features Hover
    $("div.features div").hover(function () {						 
    	$(this).find("img").stop(true, true).animate({ opacity: 0.8 }, 100);
    }, function() {
    	$(this).find("img").stop(true, true).animate({ opacity: 1.0 }, 100);
    });
    
    
    //Clients Image Hover
    $('#client-logo img').css({ opacity: 0.5 });
    $("#client-logo img").hover(function () {						 
    	$(this).stop(true, true).animate({ opacity: 1.0 }, 800);
    }, function() {
    	$(this).stop(true, true).animate({ opacity: 0.5 }, 800);
    });
    

    //FILTRABLE PORTFOLIO
	var $portfolioClone = $(".portfolio").clone();
	$("#filtrable a").live('click', function(e){
		
		$("#filtrable li").removeClass("current");	
		
		var $filterClass = $(this).parent().attr("class");

		if ( $filterClass == "all" ) {
			var $filteredPortfolio = $portfolioClone.find("li");
		} else {
			var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
		}
		
		$(".portfolio").quicksand( $filteredPortfolio, { 
			duration: 800, 
			easing: 'easeInOutQuad' 
		}, function(){
			
             $(".img-hover, .portfolio li").hover(function () {						 
            	$(this).find("img").stop(true, true).animate({ opacity: 0.7 }, 800);
                $(this).find("a.img-view, a.img-link").stop(true, true).fadeIn(300);
            }, function() {
            	$(this).find("img").stop(true, true).animate({ opacity: 1.0 }, 800);
                $(this).find("a.img-view, a.img-link").stop(true, true).fadeOut(100);
            });
            
            $("a[rel^='prettyPhoto']").prettyPhoto();

		});

		$(this).parent().addClass("current");
        
		e.preventDefault();
	})


    //SIDEBAR TABS
    $('.s-tab ul.tab-sidebar').each(function() {
        $(this).find('li').each(function(i) {
          $(this).click(function(){
            $(this).addClass('active').siblings().removeClass('active')
              .parents('div.s-tab').find('div.tab').slideUp(500).delay(500).end().find('div.tab:eq('+i+')').slideDown(1000);
          });
        });
    });
    
    
    //TOGGLE
    $(".close").click(function(){$("#seting").toggle("fast");
    $(this).toggleClass("openpanel");return false});
    $(".toggle-block").hide(); 
    $("p.toggle").click(function(){
    		$(this).toggleClass("active").next().slideToggle(500);
    		return false; 
    });
    

    //ACCORDION
    $('.acc-block').hide();
    $('.acc-header:first').addClass('active').next().show();
    $('.acc-header').click(function(){
    	if( $(this).next().is(':hidden') ) {
    		$('.acc-header').removeClass('active').next().slideUp(500);
    		$(this).toggleClass('active').next().slideDown(500);
    	}
    	return false;
    });
    
    
});


$(window).load(function() {
    
$('#slider').flexslider({
        animation: "fade",
        slideshow: true, 
        slideshowSpeed: 8000,
        animationDuration: 600,   
        directionNav: false,
        controlNav: false,
        controlsContainer: "#home_slider",
        manualControls: "#home_slider_control li", 
        start: function(){$('#slider').removeClass('loader');},
        after: function(){$('ul.slides li').find("div").fadeIn(500);},
        before: function(){$('ul.slides li').find("div").fadeOut(0);}
        
    });

		//ABOUT slider
	    $('#abt-slider').flexslider({
        animation: "fade",
        slideshow: true, 
        slideshowSpeed: 8000,
        animationDuration: 600,   
        directionNav: false,
        controlNav: false,
        start: function(){$('#abt-slider').removeClass('loader');},
        after: function(){$('ul.slides li').find("div").fadeIn(500);},
        before: function(){$('ul.slides li').find("div").fadeOut(0);}
        
    });
	
	
	// SOUND CLOUD PLAYER
	$.html5audio('#componentWrapper', ap_settings, 'sound_id1');
	ap_settings = null;

});