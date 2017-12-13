<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index </title>
    <link href="Content/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" href="Content/search_icon.ico" type="image/x-icon">
    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script> 
    <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
    <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
    
    
    <script>
    	$( document ).on( "mobileinit", function() {
    $.mobile.loading( "hide" );
    $.mobile.loading().hide();
});
    </script>
    <script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script> 
    <script src="Scripts/modernizr-2.6.2.js"></script>
    <link href="Content/Site.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div class="container body-content">
        
        

<div id="myCarousel" class="carousel slide" data-ride="carousel" style="margin-top: -5%;" data-interval="false">
    <!-- Indicators -->
    <ol class="carousel-indicators" id="CI">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div style="text-align: center !important; margin: auto !important;" class="carousel-inner">
    	
	    
	<div style="text-align: center !important; margin: auto !important;" class="item active LocDiv slide0">
    		<h3>May we use your location for a better experience?</h3>
    		<div style="text-align: center; margin: auto;">
		    <input type="text" id="zipcodeEntry" placeholder="Zipcode" style="width: 78%; font-size: 2em; margin: 1.4em;" />
			<input type="button" class="FoodBut YN" value="Use My Location" style="height: 4em;" onclick="getLocation()"/>
			<input type="button" class="FoodBut YN" value="Use My Zipcode" style="height: 4em;" onclick="getLocationFromZipcode()"/>
		</div>
    	</div>
    	
        <div style="text-align: center !important; margin: auto !important;" class="item">
            <h3 class="blueFont">How are you dining today?</h3>
            
            <form name="Dine" id="DineMethod">
            	<div style="text-align: center !important;">
               <label  class="Rad DMeth"><input type="radio" name="DM" value="2"><img src="assets/dine-in.png"></label>
                <label class="Rad DMeth"><input type="radio" name="DM" value="1"><img src="assets/delivery.png"></label><br>
                </div>
            </form>

            <h3 class="blueFont">Are you a vegetarian? </h3>
             <input type="checkbox" data-toggle="toggle", id="Veg", data-on="Yep" data-off="Nope" data-onstyle="success" data-offstyle="info" width="6px">

            <h3 class="blueFont">How much do you want to spend? </h3>
            
            <form name="budget" id="budget" class="marginTop">
            	<div style="text-align: center !important;">
               <label class="Rad money"><input type="radio" name="bud" value="1"><img src="assets/$.png"></label>
                <label class="Rad money"><input type="radio" name="bud" value="2"><img src="assets/$$.png"></label>
                <label class="Rad money"><input type="radio" name="bud" value="3"><img src="assets/$$$.png"></label><br>
                </div>
            </form>

        </div>

        <div class="item yellowFont">

            
            <h3>What kind of establishment?</h3>
            <label for="Establishment">Choose restaurant types</label>
            <form name="Establishment" id="Estab">
               <label class="CuisCheck"><input type="checkbox" name="Est" value="Bar_Pub">Bar/Pub</label>
                <label class="CuisCheck"><input type="checkbox" name="Est" value="Cafe_Bakery">Cafe/Bakery</label>
                <label class="CuisCheck"><input type="checkbox" name="Est" value="Casual_Dining">Casual Dining</label>
                <label class="CuisCheck"><input type="checkbox" name="Est" value="Fine_Dining">Fine Dining</label>
                <label class="CuisCheck"><input type="checkbox" name="Est" value="Fast_Food">Fast Food</label>
            </form>

            <h3 class="EstH">What kind of meal?</h3>
            <form name="MealT" id="MealType" class="marginTop">
            	<div style="text-align: center !important;">
               <label class="Rad mealFeel"><input type="radio" name="MT" value="8"><img src="assets/breakfast.png"></label>
                <label class="Rad mealFeel"><input type="radio" name="MT" value="9"><img src="assets/lunch.png"></label>
                <label class="Rad mealFeel"><input type="radio" name="MT" value="10"><img src="assets/dinner.png"></label><br>
                </div>
            </form>
            
        
            <h3 class="marginTop">How much time do you have?</h3>
            <form name="HowMuchTime" id="TimeAmount">
            	<div style="text-align: center !important;">
               <label class="Rad mealMeal"><input type="radio" name="time" value="700"><img src="assets/time1.png"></label>
                <label class="Rad mealMeal"><input type="radio" name="time" value="3212"><img src="assets/time2.png"></label>
                <label class="Rad mealMeal"><input type="radio" name="time" value="7000"><img src="assets/time3.png"></label><br>
                </div>
            </form>
            
        </div>

        <div class="item redFont CBOverFlow">
            <h3>What kind of cuisine?</h3>
            <form name="Region" id="Cuisines">
							<label class="CuisCheck2">African   <input type="checkbox" name="Reg" value="African"></label>
							<label class="CuisCheck2">American<input type="checkbox" name="Reg" value="American"></label>
							<label class="CuisCheck2">Asian<input type="checkbox" name="Reg" value="Asian"></label>
							<label class="CuisCheck2">Creole<input type="checkbox" name="Reg" value="Creole"></label>
							<label class="CuisCheck2">European<input type="checkbox" name="Reg" value="European"></label>
							<label class="CuisCheck2">   Hawaiian   <input type="checkbox" name="Reg" value="Hawaiian"></label>
							<label class="CuisCheck2">    Indian    <input type="checkbox" name="Reg" value="Indian"></label>
							<label class="CuisCheck2">   Mexican    <input type="checkbox" name="Reg" value="Mexican"></label>
							<label class="CuisCheck2">Middle Eastern<input type="checkbox" name="Reg" value="Middle_Eastern"></label>
							<label class="CuisCheck2">South American<input type="checkbox" name="Reg" value="South_American"></label>
            </form>
        </div>
        <div class="item ResHeight" id="RPage">
            <div id="Results">
                <div class="card">
                    <div class="card-block">
                        <h2 class="card-title"><text id="ResultText"></text><br><text id="areaText"></text></h2>
                            <h4 class="card-address"><text id="locText"></text></h4>
                                <p class="card-price"><text id="priceText"></text></p>
                                <p class="card-rating"><text id="ratingText"></text></p>
<!--                        <a href="" id="siteText" class="btn btn-primary text-center btn-lg">More Info</a>-->
                        <input type="button" id="siteText"  value="More Info" style="height: 4em;"/>
<!--                        <a href="" id="menuText" class="btn btn-primary text-center btn-lg">Menu</a>-->
                        <input type="button" id="menuText"  value="Menu" style="height: 4em;"/>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Left and right controls -->
          
    </div>
    
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
     <span class="glyphicon glyphicon-chevron-left"></span>
     <span class="sr-only">Previous</span>
   </a>
   <a class="right carousel-control" href="#myCarousel" data-slide="next">
     <span class="glyphicon glyphicon-chevron-right"></span>
     <span class="sr-only">Next</span>
   </a>

<h3 id="TryAgain" class="hideme TA" >Not Satisfied? Click again for another option!</h3>
    <div style="text-align: center; margin-top: 3%;">
    	<!-- <button id="submitBut" class="PicBut" onclick="Submit()" style="margin: auto; width: 30%; height: 4em !important;"> -->
    		
    	 <img src="Content/FoodmeS.png" id="submitBut" class="FoodBut FoodMe" onclick="Submit()" />
    </div>

<!--
<div id="ArrowButtons" class="hidden">
    <button onclick="Back()"><img src="Content/leftArrow.png"/></button>
    <button onclick="Next()"><img src="Content/rightArrow.png" /></button>
</div>-->


<script>
    $(document).ready(function () {
    	
    	$(function() {
    // Input radio-group visual controls
    $('.check-group label').on('click', function(){
    	if($(this).hasClass('not-active'))
    	{
    		$(this).removeClass('not-active');
    	}
    	else
    	{
    	$(this).addClass('not-active')
    	}
    });
});

        $(document).on("swipeleft", swipeLeftHandler);
        function swipeLeftHandler(event) {
            $('#myCarousel').carousel('next');
        }
        $(document).on("swiperight", swipeRightHandler);
        function swipeRightHandler(event) {
            $('#myCarousel').carousel('prev');
        }
        
  

        $(window).resize(function () {
            CheckSize();
        });

        function CheckSize()
        {
            var windowsize = $(window).width();
            // if (windowsize > 700) {
                // $("carousel-indicators").addClass("PC");
                // $("carousel-indicators").removeClass("MBL");
            // }
            // else {
                // $("carousel-indicators").removeClass("PC");
                // $("carousel-indicators").addClass("MBL");
            // }
             if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
   						 // Take the user to a different screen here.
									}
									else
									{
										$("#CI").addClass("PC");
										
									}
        

        }

        CheckSize();
    });

    function Back() { $('#myCarousel').carousel('prev'); }
    function Next() { $('#myCarousel').carousel('next');}
</script>








        
    </div>
    </div>

    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/Vars.js"></script>
    <script src="Scripts/API-Script_V3.js"></script>
	<script src="Scripts/ZipCodeLookup.js"></script>
    <script>
  $("#myCarousel").on('slide.bs.carousel', function(e){
  		$("#TryAgain").addClass("hideme");
		if(e.direction == "left")
		{
			cSlideIndex++;
			if(cSlideIndex > 4)
			{
				cSlideIndex=0;
			}
		}
		else{
			cSlideIndex--;
			if(cSlideIndex < 0)
			{
				cSlideIndex = 4;
			}
		}
// var carouselEl = $('#myCarousel');
    // var carouselItems = carouselEl.find('.item');
  	// // var i = $('#myCarousel .active').index();
  	// var i = carouselItems.siblings('.active').index()
  	
  	
  	var c = "slide";
  	c += cSlideIndex;
  	console.log("slide index" + cSlideIndex);
  	$("body").removeClass("slide0");
  	$("body").removeClass("slide1");
  	$("body").removeClass("slide2");
  	$("body").removeClass("slide3");
  	$("body").removeClass("slide4");
  	$("body").addClass(c);
  });

 $(".CuisCheck").on("tap", function () {
   $(this).toggleClass("CheckSelectedBlue");
});

$(".CuisCheck").on("vclick", function () {
   $(this).toggleClass("CheckSelectedBlue");
});
        
$(".CuisCheck2").on("tap", function () {
   $(this).toggleClass("CheckSelectedYellow");
});

$(".CuisCheck2").on("vclick", function () {
   $(this).toggleClass("CheckSelectedYellow");
});

$(".Mealmeal").on("vclick", function () {
	$(".Mealmeal").removeClass("CheckSelectedBlue");
   $(this).addClass("CheckSelectedBlue");
});

$(".DMeth").on("vclick", function () {
	$(".DMeth").removeClass("CheckSelectedRed");
   $(this).addClass("CheckSelectedRed");
});

$(".TimeR").on("vclick", function () {
	$(".TimeR").removeClass("CheckSelected");
   $(this).addClass("CheckSelected");
});
        
$(".mealFeel").on("vclick", function () {
	$(".mealFeel").removeClass("CheckSelectedBlue");
   $(this).addClass("CheckSelectedBlue");
});

$(".mealMeal").on("vclick", function () {
	$(".mealMeal").removeClass("CheckSelectedBlue");
   $(this).addClass("CheckSelectedBlue");
});

$(".money").on("vclick", function () {
	$(".money").removeClass("CheckSelectedRed");
   $(this).addClass("CheckSelectedRed");
});



    </script>
   
</body>
</html>
