let apiKey = "0a845f4db30721e5189640efa9333154";
let search = document.querySelector("input");
let searchBtn = document.querySelector("#check");
let cityName = document.querySelector(".city");
let currentTemp = document.querySelector(".temp");

let data = null;
async function accessToApi(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=` +
      city +
      `&appid=${apiKey}`
  );
  data = await response.json();
//   console.log(data.main.temp)
  if (!response.ok) {
    window.alert(
      "There's Something Wrong, please try again with the Correct Spelling of the city"
    );
  } else {
    cityName.innerHTML = "";
    currentTemp.innerHTML = "";
    cityName.innerHTML += data.name;
    currentTemp.innerHTML += data.main.temp + " " + "<sup>o</sup>C";
  }
}

async function loading(city){
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=` +
          city +
          `&appid=${apiKey}`
      );
      data = await response.json();
      const temp = data.main.temp;
    //   console.log(temp)
      return temp
}


searchBtn.addEventListener("click", () => {
  accessToApi(search.value);
});
function cairo(){
    search.value = "Cairo";
    accessToApi(search.value)
}
function alexandria(){
    search.value = "Alexandria";
    accessToApi(search.value)
}
function luxor(){
    search.value = "Luxor";
    accessToApi(search.value)
}
function aswan(){
    search.value = "Aswan";
    accessToApi(search.value)
}