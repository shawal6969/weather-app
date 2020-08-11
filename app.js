//api key 89afda80aa091f88596d18705a4c6473
//https://samples.openweathermap.org/data/2.5/weather?q={$cityname}&


const api = {
    url : "https://api.openweathermap.org/data/2.5/",
    key : "89afda80aa091f88596d18705a4c6473"
}

const cityName = document.getElementById("cityName");
cityName.addEventListener("keypress", function(evt){
    if (evt.keyCode == 13 ) {
        getResult(cityName.value)
    }
})

function getResult(query) {
    fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
    .then (weather => weather.json())
    .then (json => {
        let weatherCity = document.getElementById("weatherCity");
        weatherCity.innerText = `${json.name}`

        let weatherCountry = document.getElementById("weatherCountry");
        weatherCountry.innerText =` , ${json.sys.country}`

        let temp = document.getElementById("temp");
        temp.innerText = `${json.main.temp} deg. C`

        let description = document.getElementById("description");
        description.style.display = "block";
        description.innerText = `${json.weather[0].description}`
        console.log(json);
    })
}