const API = {
    key: "6b499c40bbfe47af22df74cf21df2d77",
    url: "https://api.openweathermap.org/data/2.5/"
}
const search =  document.querySelector('.searchB');
search.addEventListener('keypress', input);
function input(event){
    if(event.keyCode == 13){
        calc(search.value);
        console.log(search.value);
    }
}

function calc(query){
    fetch(`${API.url}weather?q=${query}&units=metric&appid=${API.key}`)
    .then(weather => {
      return weather.json();
    }).then(Display);
}
function Display(weather){
    console.log(weather); 
    let city = document.querySelector('.city')
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let date = new Date();
    let d = document.querySelector('.datetime');
    d.innerText = dateGen(date);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span class="celsius"> °c</span>`;

    if(Math.round(weather.main.temp <= 6)){
        document.body.style.backgroundImage = "url('6 or less.jpg')"; 

    } else if(Math.round(weather.main.temp) >= 7 && Math.round(weather.main.temp <= 12)) {
        document.body.style.backgroundImage = "url('7-12.jpg')"; 
    } else if(Math.round(weather.main.temp) >= 13 && Math.round(weather.main.temp <= 23)) {
        document.body.style.backgroundImage = "url('13-23.jpg')"; 
    } else if(Math.round(weather.main.temp) >= 24 && Math.round(weather.main.temp <= 36)) {
        document.body.style.backgroundImage = "url('24-33.jpg')"; 
    } else if(Math.round(weather.main.temp) >= 37){
        document.body.style.backgroundImage = "url('34 or greater.jpg')"; 
    }
}
function dateGen(inp) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    let day = days[inp.getDay()];
    let date = inp.getDate();
    let month = months[inp.getMonth()];
    let year = inp.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
}
