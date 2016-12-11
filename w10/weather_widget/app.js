var lat, lon;
var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'

navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  $.ajax({
    url: openWeatherMap,
    dataType: "json",
    data: {
      APPID: '4a29269fc6d9887a24331db8c39e8994',
      lat: lat,
      lon: lon,
      units: 'metric'
    }
  }).done(function(res) {
    var temp = res.main.temp;
    var location = res.name;
    console.log(temp);
    console.log(location);
    $('#temp').text(temp);
    $('#location').text(location);
  })

});
