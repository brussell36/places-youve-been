// UI Logic
$(document).ready(function() {
  
});

// Business Logic
function Place(location, landmark, timeOfYear) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
}

let portland = new Place("Portland", "Forest Park", "Fall");
let seattle = new Place("Seattle", "Pike Place Market", "Spring");
let barcelona = new Place("Barcelona", "Park Guell", "Summer");
let paris = new Place("Paris", "Notre Dame", "Winter");
let sydney = new Place("Sydney", "Opera House", "Spring");
let kangarooIsland = new Place("Kangaroo Island", "Eucalyptus Forest", "Summer");
let auckland = new Place("Auckland", "Waiheke Island", "Spring");