var googleGeocodingAPIKey = "AIzaSyCzNQbudojKOiDZSt0nFrKuT508oejGzm0";

function getLocationFromZipcode() {
    var zipcode = $("#zipcodeEntry").val();
    makeGeocodingAPIRequest(zipcode);
}

function createZipCodeQueryURL(zipcode) {
    return "https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:" + zipcode + "&key=" + googleGeocodingAPIKey;
}

function makeGeocodingAPIRequest(zipcode) {

    var url = createZipCodeQueryURL(zipcode);

    console.log("logging url");
    console.log(url);
    //onreadstatechange event triggered when request is complete
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        checkOnRequest(request);
    };
    request.open("GET", url, true);
    request.setRequestHeader('Accept', 'application/json');
    //request.setRequestHeader('user-key', key);
    request.send();
}

//takes in xmlHttpRequest
//called once search request is comlete, retrieves the list of restaurants returned from the request to the api and randomly chooses one to display
function checkOnRequest(request) {
    if (request.readyState == 4 && request.status == 200) {
        var object = JSON.parse(request.responseText);  //parse returned text to a Json object
        if (object == null) {
            console.log('empty json object');
        }
        else if (object.status != "OK") {
            console.log('zero results');
        }
        else{
            userLat = object.results[0].geometry.location.lat;
            userLong = object.results[0].geometry.location.lng;
            gotLoc = true;
            $('#myCarousel').carousel('next');
        }

    }
    else {
        console.log('ready state not changed');
    }
}