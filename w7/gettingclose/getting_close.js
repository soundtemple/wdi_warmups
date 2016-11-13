console.log('getting close');

// Current Location data
var currentLocation = [{name: "General Assembly", location: {lat: -37.8185770, long: 144.9590950}}];


var lat1 = currentLocation[0].location.lat;
var lon1 = currentLocation[0].location.long;
var lat2;
var lon2;
var new_distance;
var distances = [];

var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}];

function getDistances () {
  for (var i=0; i<myResults.length; i++ ) {
    lon2 = myResults[i].location.long;
    lat2 = myResults[i].location.lat;
    new_distance = getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2);
    distances.push({name: myResults[i].name, distance: new_distance.toFixed(2)});
  }
  distances.sort(function(a,b) {
    if (a.distance < b.distance){
      return -1;
    }
    if (a.distance > b.distance){
      return 1;
    }
    return 0;
  });
  console.log("Distances from nearest to furthest....");
  for (var i=0; i<distances.length; i++ ) {
    console.log(distances[i].name + " is " +  distances[i].distance + "km away");
  }
}



// Function to calculate distance using lat and long
// Based on  Haversine formula
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

getDistances()



// SOLUTION OFFICIAL
// https://gist.github.com/HMAN1911/ed50f15fe1f41b710a6042ca7a5a8b33

// Sort by method in Ruby
// array.sort_by do |item|
//     item[:distance]
// end
// puts(array)




// Problem
// Get current location
// Calculate distance from likes_count
// Push results to array
// Order results


// ##Getting Close
//
// You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in a park, but it has gotten so popular that many people want to join in. One of your friends created an API. An API is a way us getting data from a service. for people to add items hidden in the park, but now you want to build an App to help people decide what to find in the park.
//
//  You are given the following set of data as a result back from an API request and you want to sort those results in terms of proximity to the user of your site.
//
// ```
// var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
//           {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
//           {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
//           {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
//           {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
//           {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]
// ```
//
//
//
// Write a loop that takes some results and a current location, i.e. `lat` and `long` and returns the results in order of proximity to the `currentLocation`. Note: you should choose this current location.
