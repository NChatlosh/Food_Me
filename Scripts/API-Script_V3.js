
 function Submit()
{
	$('#myCarousel').carousel(4);
     CollectData();
}

 function InitDoneLoadingEvent()
 {
     document.addEventListener("Ready", HandleEvent);
 }
 
 function Reset()
 {
 	listsCount = 0;
	listsCountAfterLoad = 0;
 	eventFired = false;
 	Budget = 5;
 	globalrestObject = null;
 	EstabList = new Array();
	RegionList = new Array();
InitDoneLoadingEvent();
 }

 function HandleEvent(e)
 {
 	if( !e ) e = window.event;
     var stringEstab = EstabList.join();
     var stringReg = RegionList.join();
     var query = BuildQuery(stringEstab, stringReg);
     CallAPI(query);
 }

function BuildQuery(stringEstab, stringReg)
{
	//model query url
	//https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city&lat=40&lon=-70&radius=2000&cuisines=1&establishment_type=1&category=1&sort=real_distance&order=desc
	var endUrl = "&sort=real_distance&order=desc";
	var baseUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city";
	var loc = zomatoLocationQuery();
	var cuisines = "&cuisines=" + stringReg + vegValue;
    var estabs = "&establishment_type=" + stringEstab;
   	var cats = "&category=" + mtValue + "," + dmValue;
    var query = baseUrl;
    var middle = cuisines + estabs + cats;
    if(gotLoc)
    {
    	query += loc;
    }
    query += middle;
    if(gotLoc) 
    {
    	query += endUrl;
    	}
    return query;
}

 function CollectData()
{
    console.log("collecting data");
    var dineMethod = document.getElementById("DineMethod");
    var veg = document.getElementById("Veg");
    var mealType = document.getElementById("MealType");
    var establishments = document.getElementById("Estab");
    var cuisines = document.getElementById("Cuisines");
    var budget = document.getElementById("budget");
    var dist = document.getElementById("dist");

    if (document.querySelector('input[name="bud"]:checked')== null)
    {
        budgetValue = 4;
    }
    else {
        budgetValue = document.querySelector('input[name="bud"]:checked').value;
    }
    
    if (document.querySelector('input[name="time"]:checked')== null)
    {
        searchRadius = 3212;
    }
    else {
        searchRadius= document.querySelector('input[name="time"]:checked').value;
    }

    
    if (document.querySelector('input[name="DM"]:checked')== null)
    {
        dmValue = "";
    }
    else {
        dmValue = document.querySelector('input[name="DM"]:checked').value;
    }
    
    if (veg.checked)
    {
        vegValue = "308";
    }
    else
    {
         vegValue = "";
    }
    
    if (document.querySelector('input[name="MT"]:checked')== null)
    {
        mtValue = "";
    }
    else {
        mtValue = document.querySelector('input[name="MT"]:checked').value;
    }

    for (var i = 0; i < establishments.Est.length; i++)
    {
        if (establishments.Est[i].type == 'checkbox')
        {
            if (establishments.Est[i].checked)
            {
            	nothingChecked = false;
                var path = EstabPath + establishments.Est[i].value + ".json";
                loadFile(path, AddToEstabList);
                listsCount += 1;
            }
        }
    }

    for (var i = 0; i < cuisines.Reg.length; i++) {
        if (cuisines.Reg[i].type == 'checkbox') {
            if (cuisines.Reg[i].checked) {
            	nothingChecked = false;
                var path = RegionPath + cuisines.Reg[i].value + ".json";
                loadFile(path, AddToRegionList);
                listsCount += 1;
            }
        }
    }
    
    if(nothingChecked)
    {
    	CheckStatus();
    }
    
    
}

 function AddToEstabList()
 {
     listsCountAfterLoad += 1;
    var text = this.responseText;
    if (text == '') {
        console.log('no text returned');
    }
    var object = JSON.parse(text);
    for (var i = 0; i < object.establishments.length; i++) {
        EstabList.push(object.establishments[i].establishment.id);
    }
    CheckStatus();
}
 function AddToRegionList() {
     listsCountAfterLoad += 1;
    var text = this.responseText;
    if (text == '') {
        console.log('no text returned');
    }
    var object = JSON.parse(text);
    for (var i = 0; i < object.cuisines.length; i++) {
        RegionList.push(object.cuisines[i].cuisine.cuisine_id);
    }
    CheckStatus();
 }

 function CheckStatus()
 {
     if (listsCount == listsCountAfterLoad) {
         if (!eventFired)
         {
         	console.log("event not fired before, now fired");
             eventFired = true;
             try {
                 document.dispatchEvent(event);
             }
             catch (err)
             {
             	console.log("caught error");
                 document.removeEventListener("Ready", HandleEvent);
                 HandleEvent();
             }
         }
     }
 }

//creates the xmlhttpRequest object for sending and retriving data to and from API, uses url from previous functions to send search query
function CallAPI(url)
{
    console.log("logging url");
    console.log(url);
	//onreadstatechange event triggered when request is complete
	var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			GetRestaurant(request);
  		};
	request.open("GET", url, true);
	request.setRequestHeader('Accept', 'application/json');
	request.setRequestHeader('user-key', key);
	request.send();
}

//takes in xmlHttpRequest
//called once search request is comlete, retrieves the list of restaurants returned from the request to the api and randomly chooses one to display
function GetRestaurant(request)
{
    if (request.readyState == 4 && request.status == 200) {
      var object = JSON.parse(request.responseText);  //parse returned text to a Json object
      if(object == null)
      {
      	console.log('empty json object');
      }
      else {
          var subBut = document.getElementById("submitBut");
          globalrestObject = object;
         // subBut.onclick = function () { DisplayRest(globalrestObject); };
          DisplayRest(object);
      }

    }
    else
    {
    	console.log('ready state not changed');
    }
}

 function DisplayRest(object)
{
    var length = object.restaurants.length;
    var index = getRandomInt(0, length);
    while (object.restaurants[index].restaurant.price_range > budgetValue) {
        var index = getRandomInt(0, length);
    }
    var restName = object.restaurants[index].restaurant.name;
    var restLoc = object.restaurants[index].restaurant.location.address;
    var priceRange = object.restaurants[index].restaurant.price_range;
    var responseString = 'You are going to: ' + restName + ' located at: ' + restLoc;
    var priceString = "Price Range: " + priceRange;
    var resultText = document.getElementById('ResultText');
    var priceText = document.getElementById('priceText');
    resultText.innerHTML = responseString;
    priceText.innerHTML = priceString;
    Reset();
}

//got this code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//returns a random generate integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}


// got this from https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}

//called upon success of loadFile() request
function xhrSuccess() { 
	//calls the callback function passed into loadFile() 
	//also passes in the last argument(s) passed into loadfile() into the callback function, i.e. elementID
     this.callback.apply(this); 
}

//called if error occurs in loadfile() request
function xhrError() { 
    console.log(this.statusText);
    console.log("something went wrong in loadfile");
}

// got this code from https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
//model usage
//loadFile(DineMethURL, LoadDropDowns, 'DineMethod');
 function loadFile(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.onloadend = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.responseType = 'application/json';
    xhr.send(null);
}

function getLocation() {
    if (navigator.geolocation) {
        $("#locationText").html("OBTAINING...");
        navigator.geolocation.getCurrentPosition(onGotUserLocation);
    }
}

function onGotUserLocation(position) {
    userLat = position.coords.latitude;
    userLong = position.coords.longitude;
    gotLoc = true;
    $('#myCarousel').carousel('next');
}

function selectSearchRadius(sender, max) {
    searchRadius = max;
}

function zomatoLocationQuery() {

var query = "&lat=" + userLat +
    "&lon=" + userLong +
    "&radius=" + searchRadius;
    return query;
}


InitDoneLoadingEvent();

