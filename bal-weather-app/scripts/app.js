// DOM manipulation, showing things on the page

const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const weatherDetails = document.querySelector('.details');

// hook up icons as per weather conditions day & night.
const dayOrNight = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
  // const cityInfo = data.cityInfo;
  // const weather = data.weather;

  // destructuring data object. We saved data in cityInfo & weather in local variable. Destructring allows us to take data object then only take prpperty like EnglishName, weatherText, & temprature in a variable. we do it inside {} curley braces it must be the same name as the properties we are getting from object. 
  const { cityInfo, weather } = data;

  // console.log(data) {cityInfo: {…}, weather: {…}}

  // update templates. weatherDetails is a parent element. We are over write currnet  template. 

  weatherDetails.innerHTML = `
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
     <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `
  // we gave WeatherIcon 1 - 44 
  let iconImageScr = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconImageScr)
  // update night or day images.
  let dayNightImgSrc = null;  // day or night image source based on 'IsDayTime' true/false
  dayNightImgSrc = (weather.IsDayTime) ? 'img/day.svg' : 'img/night.svg';``
  // if (weather.IsDayTime) {
  //   dayNightImgSrc = 'img/day.svg';
  // }
  // else {
  //   dayNightImgSrc = 'img/night.svg';
  // }

  dayOrNight.setAttribute('src', dayNightImgSrc);


  // remove d-none class if exists
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

}


const updateCity = async (city) => {
  // getCity is async function so we must wait until it finishes then only assign to cityInfo that is reason why we have await keywork in front of getCity function. We can call below two function because forecast.js comes before app.js in index.html scripts section they are defined before it reaches here even though they are separate files. 

  const cityInfo = await getCity(city);
  const weather = await getWeather(cityInfo.Key);
  // console.log(cityInfo)
  // console.log(cityInfo.Key)
  // console.log(weather)
  // return only two things in a object
  return { cityInfo, weather };
}

cityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update ui
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))

  // updateCity(city)
  // .then(data => updateUI(data))
  // .catch(err => console.log(err))

})
