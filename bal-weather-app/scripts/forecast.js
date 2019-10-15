// This file contains all javascripts that will be responsible for 
// interacting with weather api. 

// turn this file into class.
class Forecast {
  constructor() {
    this.key = 'KugZQ1kM8UAuwSC3xBTY43xXF8NHzU6V';
    this.baseCityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    this.baseWeatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
  }

  // first method we call is update city
  async updateCity(city) {
    const cityInfo = await this.getCity(city);
    const weather = await this.getWeather(cityInfo.Key);
    return { cityInfo, weather };
  }  // end of updateCity() function    

  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.baseCityUrl + query)
    const cityData = await response.json();
    // this returns a promise  
    return cityData[0];
  }
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.baseWeatherUrl + query);
    const weatherData = await response.json();
    return weatherData[0];
  }
}


/*
const key = 'KugZQ1kM8UAuwSC3xBTY43xXF8NHzU6V';
// weather information
const getWeather = async (id) => {
  const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;
  const response = await fetch(baseUrl + query);
  const data = await response.json();
  return data[0];
}
// city information
const getCity = async (city) => {
  const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';

  // query is bal-weather-app key plus city name.
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(baseUrl + query)
  const data = await response.json();
  // this returns a promise
  return data[0];
} */

// getCity('Kathmandu')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));

// getCity('Kathmandu')
//   .then(key => {
//     return getWeather(key);
//   })
//   .then(w => console.log(w))
//   .catch(err => console.log(err));


//getWeather('328328')
