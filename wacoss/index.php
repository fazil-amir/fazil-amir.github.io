
<?php
	//echo $_SERVER["DOCUMENT_ROOT"];
?>

<!DOCTYPE html>
<html>
<head>
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<title>Knowledge Is Power</title>
	<link rel="stylesheet" type="text/css" href="Assets/Bootstrap/css/bootstrap.min.css">
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="Assets/Styles/Primary.css">

</head>
<body>


<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="#">
		<img src="Assets/Images/LogoPrimary.png">
      </a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav pull-right">        
        <li><a class="gotoAnchor" href="#" data-goto="#knowledgeManagement">Why Knowledge Management?</a></li> 
        <li><a class="gotoAnchor" href="#" data-goto="#workshopInfo">Workshop Info</a></li> 
        <li><a class="gotoAnchor" href="#" data-goto="#registration">Registration</a></li>
        <li><a class="gotoAnchor" href="#" data-goto="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>



<div class="slider" id="slider">
	<ul>
		<li>
			<img 
				src="Assets/Images/Slider/1.jpg"
				data-headline="Knowledge Is Power"
				data-paragraph="In this workshop, learn the principles of sustainable knowledge management as well as how to leverage tools such as DropIN as collaborative knowledge management solutions for your organisation."	
				data-btn-link="#workshopInfo"
				data-btn-caption="More Details"			
			>
		</li>
		<li>
			<img 
				src="Assets/Images/Slider/2.jpg"
				data-headline="What's Knowledge?"
				data-paragraph="Knowledge is a familiarity, awareness or understanding of someone or something, such as facts, information, descriptions, or skills, which is acquired through experience or education by perceiving, discovering, or learning."
				data-btn-link=""
				data-btn-caption=""
			>
		</li>
		<li>
			<img 
				src="Assets/Images/Slider/3.jpg"
				data-headline="Hassle Free Booking"
				data-paragraph="For the first time, you can now book you seats at as low as $198. Workshop on 01 - 06 - 2017. Hurry few passes are left."
				data-btn-link="#registration"
				data-btn-caption="Get Your Passes Now!!"

			>
		</li>
	</ul>
</div>


<section class="section container-fluid" id="knowledgeManagement"> 
	<div class="container">
		<h1>Why Knowledge Management?</h1>
		<div class="row">
			<div class="col-md-7">
				<p>Most companies are focused on producing a product or service for customers. However, one of the most significant keys to value-creation comes from placing emphasis on producing knowledge. The production of knowledge needs to be a major part of the overall production strategy.</p>
				<p>One of the biggest challenges behind knowledge management is the dissemination of knowledge. People with the highest knowledge have the potential for high levels of value creation. But this knowledge can only create value if it's placed in the hands of those who must execute on it. Knowledge is usually difficult to access – it leaves when the knowledge professional resigns.</p>
				<p>“The only irreplaceable capital an organization possesses is the knowledge and ability of its people. The productivity of that capital depends on how effectively people share their competence with those who can use it.” – Andrew Carnegie</p>
				<p>Therefore, knowledge management is often about managing relationships within the organization. Collaborative tools (intranets, balanced scorecards, data warehouses, customer relations management, expert systems, etc.) are often used to establish these relationships. Some companies have developed knowledge maps, identifying what must be shared, where can we find it, what information is needed to support an activity, etc. Knowledge maps codify information so that it becomes real knowledge; i.e. from data to intelligence.</p>
			</div>
			<div class="col-md-5">
				<img src="Assets/Images/Bulb.png" class="bulb">
			</div>
		</div>
	</div>
</section>


<section class="section container-fluid" id="workshopInfo"> 
	<div class="container">		
		<div class="row">
			<div class="col-md-12">
			<h1>About Workshop</h1>
				<p>The high level of turnover in this sector means that good quality talent and years of knowledge and experience walk out the door every day. This can be very costly to organisations and also hinder their ability to serve their clients.</p>

				<p><i>“67% of Australians Not-For-Profits experience medium to high turnover and only a few have knowledge management processes set in place to avoid its destructive impact.”</i></p>

				<p>Managing high levels of turnover and maximising knowledge retention within an organisation can save hundreds and thousands of dollars and ensure the continued high level of service regardless of what is happening internally.</p>

				<p>In this workshop, learn the principles of sustainable knowledge management as well as how to leverage tools such as DropIN as collaborative knowledge management solutions for your organisation.
				</p>

				<div class="row list">
					<div class="col-sm-5">
						<h3>Learning Outcomes:</h3>
							<ul>					
								<li>Better decision-making capabilities.</li>
								<li>Building a learning organisation capable of adapting to difficult and unforeseen circumstances.</li>
								<li>Stimulation of a more proactive and innovative culture organisation-wide.</li>
							</ul>
					</div>
					<div class="col-sm-4 col-sm-offset-2">
						<h3>Target Audience:</h3>
						<ul>					
							<li>Managers</li>
							<li>Project Managers</li>
							<li>Network Coordinators</li>
							<li>Internal Corporate Services team</li>
							<li>Human Resources team</li>
						</ul>
					</div>
				</div>				
				
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<a href="#" data-goto="#registration" class="gotoAnchor btn btn-lg btn-default">Hassle Free Booking</a>
			</div>
		</div>

	</div>
</section>


<section class="section container-fluid" id="registration">
	<div class="container">
		<h1 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="0">Event Registration</h1>
		<p>Price per ticket : $195</p>
		
		<div class="row">
			<div class="col-md-12" id="formContainer">
				<div class="overlay"></div>
				<div class="row formRow" id="formRow">
					<span class="count">1</span>
					<div class="col-md-4 col-sm-4">
						<div class="form-group">
							<label for="fullName">Full Name:</label>
							<input type="text" maxlength="35" class="form-control input-lg fullName" placeholder="Fazil Amir" id="fullName" name="fullName-0">
						</div>
					</div>
					<div class="col-md-3 col-sm-5">
						<div class="form-group">
							<label for="foodChoice">Food Choice:</label>
							<div>
							<input type="radio" data-value="Veg" class="input-lg foodChoice" id="foodChoice" name="foodChoice-0" checked="checked"><span class="foodChoice"> Veg</span>
							<input type="radio" data-value="Non Veg" class="input-lg foodChoice" id="foodChoice" name="foodChoice-0"><span class="foodChoice"> Non Veg</span>
							</div>
						</div>					
					</div>
					<div class="col-sm-5 col-sm-3 addRemove">
						<a class="btn btn-warning btnAddRemove" id="btnAdd"><i class="glyphicon glyphicon-plus"></i></a>
						<a class="btn btn-danger btnAddRemove" id="btnRemove"><i class="glyphicon glyphicon-minus"></i></a>
					</div>
				</div>
			</div>
			<div class="col-md-12" id="ticketContainer"><div style="width: 650px; margin: auto;"></div></div>
		</div>

		<div class="row">
			<div class="col-md-12 totalWrapper" id="totalWrapper">
				<a class="btn btn-default btn-lg total" id="total">
					<span class="number"> <i class="glyphicon glyphicon-user"></i> <m id="totalCount">10</m> </span>
					<span class="divider"> X </span>
					<span class="number">$195</span>
					<span class="divider"> = </span>
					<span class="number">$<m id="totalPrice">10000</m></span>
					<span class="click">Process My Order</span>
				</a>
				<a class="btn btn-default btn-lg download" id="download">
					<span class="number">Download Your Pass</span>
					<span class="click">Get the ticket while coming</span>
				</a>					
			</div>
		</div>
	
		<div class="row list">
			<div class="col-sm-6">
				<h3>Terms and Conditions</h3>
				<ul>					
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend</li>
					<li>Lorem ipsum dolor sit amet, adipiscing elit. Etiam eleifend</li>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend</li>
					<li>Lorem ipsum dolor sit amet, consectetur etiam eleifend</li>
					<li>Lorem ipsum dolor</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<h3>Tips to be noted</h3>
				<ul>					
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend</li>
					<li>Lorem ipsum dolor sit amet, adipiscing elit. Etiam eleifend</li>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend</li>
					<li>Lorem ipsum dolor sit amet, consectetur etiam eleifend</li>
					<li>Lorem ipsum dolor</li>
				</ul>
			</div>
		</div>

	</div>




	<div id="registrationConfirm" class="modal fade" role="dialog">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Confirm Passes</h4>
				</div>
				<div class="modal-body"></div>
				<div class="modal-footer">
					<div class="row">
						<div class="col-sm-3 col-xs-12">
							<button type="button" class="btn btn-warning btn-block" data-dismiss="modal">Modify Cart</button>
						</div>
						<div class="col-sm-3 col-xs-12">
							<button type="button" class="btn btn-primary btn-block" id="confirmOrder" data-dismiss="modal">Confirm &amp; Submit</button>						
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</section>

<section class="section container-fluid" id="contact">
	<div class="container">
	<h1>Contact Workshop Managers</h1>

	<div class="row">
		<div class="col-lg-3 col-sm-6">
			<div class="card">
				<div class="avatar"><img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg"></div>
				<div class="info">
					<div class="title">Mr. John Doe</div>
					<div class="desc">Event Orginizer</div>
					<div class="desc">+91 9900990099</div>
				</div>                
			</div>
		</div>
		
		<div class="col-lg-3 col-sm-6">
			<div class="card">
				<div class="avatar"><img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"></div>
				<div class="info">
					<div class="title">Mr. Rajesh</div>
					<div class="desc">Food Incharge</div>
					<div class="desc">+91 9876234564</div>
				</div>                
			</div>
		</div>

		<div class="col-lg-3 col-sm-6">
			<div class="card">
				<div class="avatar"><img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"></div>
				<div class="info">
					<div class="title">Ms. Akshata</div>
					<div class="desc">Hospitality Manager</div>
					<div class="desc">+91 98756789876</div>
				</div>                
			</div>
		</div>

		<div class="col-lg-3 col-sm-6">
			<div class="card">
				<div class="avatar"><img alt="" src="http://lorempixel.com/128/128/people/9/"></div>
				<div class="info">
					<div class="title">Ms. Aaliya Sayed</div>
					<div class="desc">Ticket &amp; Booking</div>
					<div class="desc">+91 9876489756</div>
				</div>                
			</div>
		</div>
	</div>

</section>


<script type="text/javascript" src="Assets/Scripts/Jquery.Min.js"></script>
<script type="text/javascript" src="Assets/Bootstrap/js/bootstrap.min.js" ></script>
<script type="text/javascript" src="Assets/Scripts/Slider.js"></script>
<script type="text/javascript" src="Assets/Scripts/AddMore.js"></script>
<script type="text/javascript" src="Assets/Scripts/html2canvas.min.js"></script>
<script type="text/javascript" src="Assets/Scripts/Primary.js"></script>


</body>
</html>