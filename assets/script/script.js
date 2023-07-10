let weather = {
  "apiKey": "6ad17921c1cde5846951cca12f7bb7b5",
  fetchWeather: function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    + "&units=imperial&appid="
    + this.apiKey
    )
    .then((response) => response.json()).then((data) => console.log(data));
  },
  displayWeather: function(data){

  }
  }
