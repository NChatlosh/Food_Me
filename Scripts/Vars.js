var key = '5df20780c96bdedadcce283a9c2ac048';
var EstabPath = "\JSON_Files/Establishments/";
var RegionPath = "\JSON_Files/Regions/";
var DineMethURL = "\JSON_Files/Dine_Method/Dine_Method.txt";
var MealTypeURL = "\JSON_Files/Meal_Type/Meal_Type.txt";

var globalrestObject = null;
var Budget = 5;

var EstabList = new Array();
var RegionList = new Array();

var dmValue;
var budgetValue;
var vegValue;
var mtValue;

var event = new CustomEvent("Ready");
var eventFired = false;

var listsCount = 0;
var listsCountAfterLoad = 0;

var nothingChecked = true;