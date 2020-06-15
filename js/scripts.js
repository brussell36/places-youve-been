// UI Logic
$(document).ready(function() {
  $("ul").click(function () {
  });
});

// Business Logic
function TravelLog() {
  this.places = [];
}

TravelLog.prototype.addPlace = function(place) {
  this.places.push(place);
}

function Place(location, landmark, timeOfYear) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
}

Place.prototype.fullInfo = function() {
  return this.location + ", " + this.landmark + ", " + this.timeOfYear;
}

let travelLog = new TravelLog();
let portland = new Place("Portland", "Forest Park", "Fall");
let seattle = new Place("Seattle", "Pike Place Market", "Spring");
let barcelona = new Place("Barcelona", "Park Guell", "Summer");
let paris = new Place("Paris", "Notre Dame", "Winter");
let sydney = new Place("Sydney", "Opera House", "Spring");
let kangarooIsland = new Place("Kangaroo Island", "Eucalyptus Forest", "Summer");
let auckland = new Place("Auckland", "Waiheke Island", "Spring");


travelLog.addPlace(portland);
travelLog.addPlace(seattle);
travelLog.addPlace(barcelona);
travelLog.addPlace(paris);
travelLog.addPlace(sydney);
travelLog.addPlace(kangarooIsland);
travelLog.addPlace(auckland);
console.log(travelLog.places);