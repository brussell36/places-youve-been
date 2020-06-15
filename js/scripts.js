// UI Logic
$(document).ready(function() {
  $(this).click(function () {
    //$(this).children().append("<li>" + portland.fullInfo() + "</li>");
    $(".result1").text(`${portland.fullInfo()}`);
    $(".result2").text(`${seattle.fullInfo()}`);
    $(".result3").text(`${barcelona.fullInfo()}`);
    $(".result4").text(`${paris.fullInfo()}`);
    $(".result5").text(`${sydney.fullInfo()}`);
    $(".result6").text(`${kangarooIsland.fullInfo()}`);
    $(".result7").text(`${auckland.fullInfo()}`);

  });
});

// Business Logic for TravelLog
function TravelLog() {
  this.places = [];
  this.currentId = 0;
}

TravelLog.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

TravelLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TravelLog.prototype.findPlace = function(id) {
  for (let i=0; i < this.places.length; i++) {
    if (this.places[id]) {
      if (this.places[i].id == id) {
        return this.places[id];
      }
    }
  };
  return false;
}

// Business Logic for Place
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

console.log(travelLog.findPlace(2));