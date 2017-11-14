var key = '5df20780c96bdedadcce283a9c2ac048';
var EstabPath = "\JSON_files/Establishments/";
var RegionPath = "\JSON_files/Regions/";
var DineMethURL = "\JSON_files/Dine_Method/Dine_Method.txt";
var MealTypeURL = "\JSON_files/Meal_Type/Meal_Type.txt";
	
function main()
{
	
	loadFile(DineMethURL, LoadDropDowns, 'DineMethod');
	loadFile(MealTypeURL, LoadDropDowns, 'MealType');
	
	var submit = document.getElementById('Submit');
	submit.onclick = function()
	{
		var stringArgs = RetrieveDataFromPage();
		if(stringArgs.length != 0)
		{
			Search(stringArgs);
		}
		else
		{
			console.log('stringArgs array is empty');
		}
	};
}

//creates the xmlhttpRequest object for sending and retriving data to and from API, uses url from previous functions to send search query
function CallAPI(url)
{
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

//retieves the necessary data from html page to build string array for use of building search url for api
function RetrieveDataFromPage()
{
	var stringArgs = [];
	//logic for building string arguments to concatenate to url for Zomato API search query, yet to be determined until page is built
	return stringArgs;
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
      var length = object.restaurants.length;
      var index = getRandomInt(0, length);
      var restName = object.restaurants[index].restaurant.name;
      var restLoc = object.restaurants[index].restaurant.location.address;
      var responseString = 'You are going to: ' + restName + ' located at: ' + restLoc;
      var response = document.getElementById('Response');
      response.innerHTML = responseString;
    }
    else
    {
    	console.log('ready state not changed');
    }
}

//got this code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//returns a random generate integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

//builds search query url for api call, takes in string array consisting of ids for category, establishment type, etc.
function Search(urlArgs)
{
	//same base url every time because it must search within Chicago only(id is 292)
	var baseUrl = 'https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city';
	var url = baseUrl;
	for (str in urlArgs)
	{
		//for each string in the array, add to url
		url+=str;
	}
	//model search url
	// var url = 'https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city&cuisines=1&category=1'
	
	//now call CallAPI(), passing in the new url
	CallAPI(url);
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
    this.callback.apply(this, this.arguments); 
}

//called if error occurs in loadfile() request
function xhrError() { 
    console.log(this.statusText); 
}

// got this code from https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
//model usage
//loadFile(DineMethURL, LoadDropDowns, 'DineMethod');
function loadFile(url, callback, elementID) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.arguments = Array.prototype.slice.call(arguments, 2);
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.send(null);
}

//callback function passed into loadFile()
function LoadDropDowns(elementID)
{
	var select = document.getElementById(elementID);
	var text = this.responseText;
	if(text == '')
    	{
    		console.log('no text returned');
    	}
      var object = JSON.parse(text);
       for(i in object.categories)
      {
      	var opt = document.createElement('option');
    	opt.innerHTML = object.categories[i].categories.name;
    	opt.value = object.categories[i].categories.id;
    	select.appendChild(opt);
      }
}

main();
