const API_KEY ="791307e51168149b229ef3272de616c7";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //https://openweathermap.org/ <- 위도경도로 날씨 찾는 API
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:nth-child(2)");
    const desc = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    desc.innerText = data.weather[0].description;
    });
  }
function onGeoError(){
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
//↑브라우저가 위치 확인함