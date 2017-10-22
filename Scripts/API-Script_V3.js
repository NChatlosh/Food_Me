var key = '5df20780c96bdedadcce283a9c2ac048';
var EstabPath = "\JSON_files/Establishments/";
var RegionPath = "\JSON_files/Regions/";

function main()
{
	var DineMethURL = "\JSON_files/Dine_Method/Dine_Method.txt";
	var MealTypeURL = "\JSON_files/Meal_Type/Meal_Type.txt";
	
	loadFile(DineMethURL, LoadDropDowns, 'DineMethod');
	loadFile(MealTypeURL, LoadDropDowns, 'MealType');
	
	var submit = document.getElementById('Submit');
	submit.onclick = function()
	{
		//Search();
	};
}


function CallAPI(url)
{
	var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			GetRestaurant(request);
  		};
	request.open("GET", url, true);
	request.setRequestHeader('Accept', 'application/json');
	request.setRequestHeader('user-key', key);
	request.send();
}

function GetRestaurant(request)
{
    if (request.readyState == 4 && request.status == 200) {
      var object = JSON.parse(request.responseText);
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
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

function Search()
{
	var catSelect = document.getElementById('Categories');
	var cuisSelect = document.getElementById('Cuisines');
	var catID = catSelect.value;
	var cuisID = cuisSelect.value;
	
	//model search url
	// var url = 'https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city&cuisines=1&category=1'
	
	var url = 'https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city&cuisines=' + cuisID + '&category=' + catID;
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

function xhrSuccess() { 
    this.callback.apply(this, this.arguments); 
}

function xhrError() { 
    console.log(this.statusText); 
}

// got this code from https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
function loadFile(url, callback, elementID) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.arguments = Array.prototype.slice.call(arguments, 2);
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.send(null);
}

function TestPopCat()
{
	//var path = "\JSON_files/Dine_Method.txt";
   // loadFile(path, LoadCatList);	
}

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
