const input = document.querySelector("#inputfield");
const searching = document.querySelector("#searching");
const start_btn = document.querySelector("#Get-start");

const weather_photo = document.querySelector("#weather_photo");
const desc = document.querySelector("#desc");
const temp = document.querySelector("#temp");
const cityName = document.querySelector("#cityName");
const wind = document.querySelector("#windcalculate");
const humidity = document.querySelector("#humidity-calculate");

const Go_btn = document.querySelector("#Go");

const mainbox1 = document.querySelector(".mainbox1");
const mainbox2 = document.querySelector(".mainbox2");
const mainbox3 = document.querySelector(".mainbox3");

// ---------------- CHANGE WEATHER IMAGE ----------------

function change_icon(weather_image) {
  const icon_image = {
    Clouds: "./images/clouds.png",
    Rain: "./images/rain.png",
    Mist: "./images/mist.png",
    Haze: "./images/haze.png",
    Snow: "./images/snow.png",
    Clear: "./images/clear (1).png",
  };

  weather_photo.src = icon_image[weather_image] || "./images/clear (1).png";
}

// ---------------- API ----------------

const url = "https://api.openweathermap.org/data/2.5/weather?";
const API_key = "832d6176bfd853c77fe27e3d71cac481";

async function fetchData(city) {
  try {
    const final_url = `${url}q=${city}&appid=${API_key}`;

    const response = await fetch(final_url);

    const get_data = await response.json();

    console.log(get_data);

    // ---------------- WRONG CITY ----------------

    if (get_data.cod === 404 || get_data.cod === "404") {
      mainbox2.classList.add("inactive");
      mainbox3.classList.remove("inactive");

      desc.textContent = "Description";
      temp.textContent = "0°C";
      cityName.textContent = "Enter city";
      wind.textContent = "0 km/h";
      humidity.textContent = "0%";

      input.value = "";

      weather_photo.src = "./images/clear (1).png";

      return;
    }

    // ---------------- WEATHER IMAGE ----------------

    change_icon(get_data.weather[0].main);

    // ---------------- CITY NAME ----------------

    cityName.textContent = get_data.name;

    // ---------------- DESCRIPTION ----------------

    desc.textContent = get_data.weather[0].description;

    // ---------------- TEMPERATURE ----------------

    temp.textContent = Math.round(get_data.main.temp - 273.15) + "°C";

    // ---------------- HUMIDITY ----------------

    humidity.textContent = get_data.main.humidity + "%";

    // ---------------- WIND ----------------
    // API gives wind speed in m/s
    // Convert m/s to km/h

    wind.textContent = (get_data.wind.speed * 3.6).toFixed(1) + " km/h";
  } catch (error) {
    console.log("Error:", error);
  }
}

// ---------------- SEARCH BUTTON ----------------

searching.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    fetchData(input.value.trim());
  }
});

// ---------------- ENTER KEY ----------------

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (input.value.trim() !== "") {
      fetchData(input.value.trim());
    }
  }
});

// ---------------- GET STARTED BUTTON ----------------

start_btn.addEventListener("click", () => {
  mainbox2.classList.remove("inactive");

  mainbox1.classList.add("inactive");
});

// ---------------- GO BUTTON ----------------

Go_btn.addEventListener("click", () => {
  mainbox3.classList.add("inactive");

  mainbox1.classList.remove("inactive");
});
