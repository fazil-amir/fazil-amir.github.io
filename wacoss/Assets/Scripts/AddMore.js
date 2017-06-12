
/* ############################################################################################################################################### 
																										
	ADDMORE.JS
	The backbone of ticket / order processing is here.
																																			
################################################################################################################################################# */


/* ========================

	Module Add More

====================================================================================================================== */



var AddMore = {

	/* -----------------------
		DOM ELements
	--------------------------------------------------------------------------------------------------- */
	
	DOM: {
		btnAdd: $('#btnAdd') ,
		btnRemove: $('#btnRemove') ,
		appendOnElement: $('#formContainer'),
		ticketContainer: $('#ticketContainer > div'),
		cloneElement: $('#formRow'),
		totalWrapper: $('#totalWrapper'),
		totalCount: '#totalCount',
		totalPrice: '#totalPrice',
		modal: $('#registrationConfirm'),
		confirmOrder: $('#confirmOrder')
	},

	/* -----------------------
		Other Variables
	--------------------------------------------------------------------------------------------------- */
	
	vars: {		
		ticketPrice: 100,
		maxTickets: 15
	},


	/* -----------------------
		Constructor / Init
	--------------------------------------------------------------------------------------------------- */
	
	init: function(vars, DOM){

		$.extend(this.vars, vars);
		$.extend(this.DOM, DOM);

		this.btnAddRemove();
		this.btnShowHide();
		this.btnShowCart();
		this.confirmOrder();
		this.btnDownloadTicket();

	},

	/* -----------------------
		Btn Add Remove
		When user clicks on the add or remove buttons this block is executed.
	--------------------------------------------------------------------------------------------------- */
	
	btnAddRemove: function(){
		
		var count = 1, index, cloned, element, name, number;
			
		/* .......................
			Click event add
		.................................................................................... */
		
		this.DOM.btnAdd.on('click', function(e) {
			
			index		= AddMore.getUpdatedFormRow();	 			/* Get the actual count of element which were created dynamically  */
			element 	= index.eq(index.length - 1);   			/* Since eq starts with zero*/
			element.find('a.btnAddRemove').removeClass('holdEmpty').removeClass('holdName');  	/* remove previosly validation hold class*/
				
			if(index.length > AddMore.vars.maxTickets ){
				alert('max ' + AddMore.vars.maxTickets + ' tickets you can buy.');
				return false;
			}

			/* .......................
				Create new element if the current one has some text in input field validation has passed
			.................................................................................... */
			
			if( AddMore.validation.validateEmpty( element.find('input[type="text"]') ) === false ) {
				element.find('a.btnAddRemove').addClass('holdEmpty');
				return false;
			} 

			else if( AddMore.validation.validateCharacters( element.find('input[type="text"]') ) === false || 
				AddMore.validation.validateMinLength( element.find('input[type="text"]') ) === false ) {
				element.find('a.btnAddRemove').addClass('holdName');
				return false;
			} 


			/* .......................
				Clone and append element
			.................................................................................... */
			
			index		= index.length;			
			cloned 		= AddMore.getUpdatedFormRow().last().clone(true); /* Get updated dom's row */
			
			/* Make sure names are qunique always*/
			cloned.find('input').each(function(){

				name 		= $(this).attr('name').split('-');
				number 		= parseInt(name[1]) + parseInt(index);
				name   		= name[0] + '-' + number;			

				$(this).attr('name', name);				

			});
			
			cloned.appendTo(AddMore.DOM.appendOnElement);
			cloned.find('input[type="text"]').val('').focus();
			
			AddMore.btnShowHide();		/* Make sure to refresh buttons */
			AddMore.disableFields();	/* Make sure previous input fields are disabled, so user cannot alter it. */
			
			/* Make sure the count span gets current count*/
			AddMore.updateCount();

			AddMore.updateTotal();

		});


		/* .......................
			Click event Remove
		.................................................................................... */
		
		this.DOM.btnRemove.on('click', function(){
			
			$(this).parent().parent().remove();
			
			AddMore.btnShowHide();		/* Make sure to refresh buttons */
			AddMore.disableFields();	/* Make sure previous input fields are disabled, so user cannot alter it. */
			
			/* Make sure the count span gets current count*/
			AddMore.updateCount();

			AddMore.updateTotal();
		});
	
	},

	
	/* -----------------------
		Btn Show Hide
		This method make sures when to show remove button and when not to
	--------------------------------------------------------------------------------------------------- */
	
	btnShowHide: function(){

		var formRow 	= this.getUpdatedFormRow();

		if(formRow.length == 1 ){
			formRow.find('a#btnRemove').hide();   		   /* No need to show remove button when you have only on field*/
		} 
		else if (formRow.length > 1) {
			formRow.find('a#btnRemove').show();			   /*Show remove button on every field but except in last, we that below */
			formRow.find('a#btnRemove').last().hide();
		}

	},


	/* -----------------------
		Disable Fields
		Disables the input fields
	--------------------------------------------------------------------------------------------------- */
	
	disableFields: function(){

		var formRow 	= this.getUpdatedFormRow();

		if(formRow.length == 1 ){
			formRow.removeClass('disabled');  /* No need to show remove button when you have only on field*/
		}
		else if(formRow.length > 1){
			formRow.addClass('disabled');		   /*Show remove button on every field but except in last, we that below */
			formRow.last().removeClass('disabled');
		}
	
	},	

	/* -----------------------
		Update Total
		This method helps in calculating total
	--------------------------------------------------------------------------------------------------- */
	
	updateTotal: function(){

		var formRow 	= this.getUpdatedFormRow();
		var total 		= this.vars.ticketPrice * parseInt(formRow.length - 1);

		if(formRow.length >= 1) {
			if(formRow.find('input[type="text"]').val() != '') {
				this.DOM.totalWrapper.addClass('open');
				this.DOM.totalWrapper.find(this.DOM.totalCount).html( formRow.length - 1);
				this.DOM.totalWrapper.find(this.DOM.totalPrice).html( parseInt(formRow.length - 1) * this.vars.ticketPrice)
			} else {
				this.DOM.totalWrapper.removeClass('open');
			}
		}

	},


	/* -----------------------
		Get Updated Form Row
		This method returns the actual element that were created dynamically
	--------------------------------------------------------------------------------------------------- */
	
	getUpdatedFormRow: function(){

		var className 			= this.DOM.cloneElement.attr('id');
		return $(document).find('div#' + className);

	},


	/* -----------------------
		Update Count
		This method helps in render row numbers to count span.
	--------------------------------------------------------------------------------------------------- */
	
	updateCount: function(){

		var formRow = this.getUpdatedFormRow();
		
		formRow.each(function(index){
			
			$(this).find('span.count').html(index + 1);

		});

	},

	/* -----------------------
		Btn Show Modal
		Handles click event of confirm booking button
	--------------------------------------------------------------------------------------------------- */
	
	btnShowCart: function(){

		var modalWindow 			= AddMore.DOM.modal;
		var formRow, n, html 		= '';

		this.DOM.totalWrapper.find('a#total').click(function(){
			
			/* Prepare table */

			html = '<table class="table table-bordered">';
			html += '<thead>';
			html += '<tr>';
			html += '<th>#</th>';
			html += '<th>Full Name</th>';
			html += '<th>Food Choice</th>';
			html += '</tr>';
			html += '</thead>';						
			html += '<tbody>';

			formRow = AddMore.getUpdatedFormRow();
			
			/* Now loop through the dynamic elements and fetch mandatory details */

			formRow.each(function(i){
								
				if( $(this).hasClass('disabled') ) {
					n = i + 1;
					html += '<tr>';
						html += '<td>' + n + '</td>';
						html += '<td>' + $(this).find('input[type="text"]').val() + '</td>';
						html += '<td>' + $(this).find('input[type="radio"]:checked').data('value') + '</td>';
					html += '</tr>';
				}
	
			});
			
			/* Prepare other required elements */

			html += '</tbody>';
			html += '</table><br><br>';
			
			html += '<div class="row">';
				html += '<div class="col-md-12">';
					html += '<h4 class="modal-title">Contact Details</h4><hr>';
				html += '</div>';
			html += '</div>';

			html += '<div class="row">';
			html += '<div class="col-md-5 col-xs-12">';
				html += '<div class="form-group">';
					html += '<label for="contactPersonName">Full Name:</label>';
					html += '<input type="text" maxlength="35" placeholder="Your Name" class="form-control input-lg contactPersonName" id="contactPersonName" name="contactPersonName">';
				html += '</div>';
			html += '</div>';
			html += '<div class="col-md-5 col-xs-12">';
				html += '<div class="form-group">';
					html += '<label for="contactPersonEmail">Email:</label>';
					html += '<input type="email" maxlength="35" placeholder="email@yourname.com" class="form-control input-lg contactPersonEmail" id="contactPersonEmail" name="contactPersonEmail">';
				html += '</div>';
			html += '</div>';
			html += '</div>';

			html += '<div class="total">Grand Total: $' + n * AddMore.vars.ticketPrice + '</div>';

			modalWindow.find('div.modal-body').html(html);

			modalWindow.modal('show');

		});

	},

	/* -----------------------
		Proceed Booking
		Once user has hit the confirm button on modal, this method then takes the control
		to basic validate and sends data to php and renders html ticket passed by php
	--------------------------------------------------------------------------------------------------- */
	
	confirmOrder: function() {

		this.DOM.confirmOrder.on('click', function(){

			var formData = [], data = {}, formRow, name, email;

			/* .......................
				Validation
			.................................................................................... */

			name 				= $('.modal').find('input[type="text"]');
			name.parent().removeClass('errorName');

			if( AddMore.validation.validateEmpty(name) === false ||
				AddMore.validation.validateCharacters(name) === false||
				AddMore.validation.validateMinLength(name) === false ) {

				name.parent().addClass('errorName');
				name.addClass('errorName').focus();
				return false;
			}

			email 				= $('.modal').find('input[type="email"]');
			email.parent().removeClass('error');

			if(AddMore.validation.validateEmailCharacters(email) === false) {
				email.parent().addClass('errorEmail');
				email.addClass('errorEmail').focus();
				return false;
			}

			
			/* .......................
				No Validation Errors so proceed
			.................................................................................... */
			
			/* Add Contact Details */
			
			formData.push({
				contact : {
					fullName: name.val(),
					email:    email.val()
				}
			});


			/* Get input field details */
			
			formRow = AddMore.getUpdatedFormRow();

			formRow.each(function(i){
				if($(this).hasClass('disabled')){
					data = {
						fullName: $(this).find('input[type="text"]').val(),
						foodChoice: $(this).find('input[type="radio"]:checked').data('value')
					};
					formData.push(data);
				}
			});

			/* .......................
				Contact processing page via ajax for creating a ticket
			.................................................................................... */
			
			AddMore.DOM.appendOnElement.addClass('disabled');
			AddMore.DOM.totalWrapper.find('a#total').addClass('disabled');

			$.post('Private/Request.php', {
				
				ticketData: JSON.stringify(formData) 
				
				}, function(response){
				
					var obj				= jQuery.parseJSON(response);

					/* Open the file where ticket is stored */
					
					$(AddMore.DOM.ticketContainer).load('Private/Tickets/' + obj.fileName, function(){
						AddMore.DOM.appendOnElement.removeClass('disabled').slideUp();						
					});
					
					$(AddMore.DOM.ticketContainer).show(); /* Hide the ticket container */
					
					AddMore.DOM.totalWrapper.find('a#download').addClass('open'); /* Show Download button */

				} /* End of call from post*/

			); /* End of post */

		}); /* End of confirm button click event */

	},


	/* -----------------------
		Btn Download Ticket
	--------------------------------------------------------------------------------------------------- */
	
	btnDownloadTicket: function(){
		
		var ticketGenerated 			= false;

		this.DOM.totalWrapper.find('a#download').click(function(){
			
			if( ticketGenerated === false ){
				
				ticketGenerated 		= true;

				var element 			= $(document).find('div#customTicket');
				
				html2canvas(element,{
					onrendered: function(canvas){
						
						var a = document.createElement('a');
						a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
						a.download = 'TicketInformation.jpeg';
						a.click();

					}
				});
			}
			
			/* .......................
				Reset the DOM to initial stage
			.................................................................................... */
						
			
		})

	},



	/* -----------------------
		Validation
	--------------------------------------------------------------------------------------------------- */
	
	validation: {
		validateEmpty: function(element){
			if( element.val().trim() === ''){				
				return false;
			}
		},
		validateCharacters: function(element){			
			if (/^[a-zA-Z ]*$/.test(element.val().trim()) === false){			
				return false;			
			}
		},
		validateMinLength: function(element){
			if( element.val().trim().length < 3 ){
				return false;
			}
		},
		validateEmailCharacters: function(element){			
			var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (regex.test(element.val().trim()) === false){
				return false;
			}
		}
	},

}
