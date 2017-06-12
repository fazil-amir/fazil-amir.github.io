

/* ############################################################################################################################################### 
																										
	SLIDER.JS
	This script / module serves the purpose of full height slider 
																																			
################################################################################################################################################# */



/* ========================

	Module Slider

====================================================================================================================== */

var Slider = {

	/* -----------------------
		DOM ELements
	--------------------------------------------------------------------------------------------------- */
	
	DOM: {

		slider: $('#slider'),
		sliderWrapper: 'sliderWrapper',
		sliderItem: 'slideItem'

	},

	
	/* -----------------------
		Private Variables
	--------------------------------------------------------------------------------------------------- */
	
	vars: {

		slides: [],
		internval: 8000,

	},

	
	/* -----------------------
		Init
	--------------------------------------------------------------------------------------------------- */
	
	init: function(){	
		
		this.fetchSliderData();

		this.createElement(this.DOM.slider, '<div />', this.DOM.sliderWrapper);

		this.createSlides();

		this.startInterval();

	},

	/* -----------------------
		Fetch Slider Data
		Fetches the slide data from html input data we create
	--------------------------------------------------------------------------------------------------- */
	
	fetchSliderData: function(){

		var elem 		= this.DOM.slider.find('ul li img');
		var slides 		= [];

		elem.each(function(i){
				
			var slide = {
				image: $(this).attr('src'),
				headline: $(this).data('headline'),
				paragraph: $(this).data('paragraph'),
				btnCaption: $(this).data('btn-caption'),
				btnLink: $(this).data('btn-link'),
			}

			slides.push(slide);

		});

		this.vars.slides = slides;

	},

	/* -----------------------
		Create Element
		This method creates a HTML element
	--------------------------------------------------------------------------------------------------- */
	
	createElement: function(appendOnElement, elementName, className = '', htmlData = '', inlineStyles = '', dataData = ''){

		appendOnElement.append(

			$(elementName, {

				class: className,
				html: htmlData,
				data: dataData,
				style: inlineStyles
				
			})
			.attr('data-image', dataData)

		);
		
	},

	/* -----------------------
		Create Slides
		This method create a slide item
	--------------------------------------------------------------------------------------------------- */
	
	createSlides: function(){

		var slideLen 		= this.vars.slides.length;
		var dataData, htmlData;

		for(var i = 0; i < slideLen; i++){
			
			dataData 	= this.vars.slides[i].image;
			
			htmlData 	= '<div class="container">';
				htmlData 	+= '<div class="wrapper">';
					htmlData 	+= '<h2><span>' + this.vars.slides[i].headline + '</span></h2>';
					htmlData 	+= '<p><span>' + this.vars.slides[i].paragraph + '</span></p>';
					
					if(this.vars.slides[i].btnLink !== '') {
						
						htmlData 	+= '<a data-goto="' + this.vars.slides[i].btnLink + '" href="#" class="btn btn-default gotoAnchor">' + this.vars.slides[i].btnCaption + '</a>';
					
					}

				htmlData 	+= '</div>';
			htmlData 	+= '</div>';

			this.createElement($('.' + this.DOM.sliderWrapper), '<div />', this.DOM.sliderItem, htmlData, '', dataData);

		}

	},

	
	/* -----------------------
		Start Interval
		This method starts the timer and invokes slide rotation for changing slides
	--------------------------------------------------------------------------------------------------- */
	
	startInterval: function(){

		var i = 1, slideLen = this.vars.slides.length;;

		setInterval(function(){

			if(i < slideLen){

				Slider.rotateSlides(i++);

			} else {

				i = 0;
				Slider.rotateSlides(i++);

			}

		}, Slider.vars.internval);

	},

	/* -----------------------
		Rotate Slides
		This methos change's the slide from old to new 
	--------------------------------------------------------------------------------------------------- */
	
	rotateSlides: function(index) {

		var bg 				= $('.' + this.DOM.sliderItem).eq(index).data('image');

		$('.' + this.DOM.sliderItem)
		
			.css({
				visibility: 'hidden'		
			})		
			
			.animate({			
				opacity: '0'
			}, 'slow', function(){			
				$(this).find('h2, p').attr('style', '');
			})

			.parent()
			
			.css({
				backgroundImage : "url('" + bg + "')"
			});

		$('.' + this.DOM.sliderItem)

		$('.' + this.DOM.sliderItem)

			.eq(index)

			.css({
				visibility: 'visible'
			})

			.animate({
				
				opacity: '1'

			}, 'slow');

	}

};