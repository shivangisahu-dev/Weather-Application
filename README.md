# 🌦️ Weather Application

<p align="center">
  <strong>A Responsive Real-Time Weather Application Built with HTML5, CSS3 & JavaScript</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Structure-orange?style=for-the-badge&logo=html5">
  <img src="https://img.shields.io/badge/CSS3-Styling-blue?style=for-the-badge&logo=css3">
  <img src="https://img.shields.io/badge/JavaScript-Logic-yellow?style=for-the-badge&logo=javascript">
  <img src="https://img.shields.io/badge/API-OpenWeatherMap-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge">
</p>

---

## 📌 About the Project

**Weather Application** is a single-page web application built using **HTML5, CSS3 and JavaScript** that shows real-time weather information for any city in the world.

It fetches live data from a weather API using the **Fetch API (async/await)** and presents it in a clean, responsive interface with proper **error handling** for a smooth user experience.

---

## ✨ Features

* 🔍 **City Search** — search weather for any city worldwide
* 📍 **Current Location Weather** — get weather using browser Geolocation
* 🌡️ **Live Weather Details** — temperature, feels like, humidity, wind speed, pressure, and visibility
* 📅 **Forecast** — upcoming days' weather at a glance
* 🔄 **Unit Toggle** — switch between °C and °F
* ⏳ **Loading State** — loader shown while data is being fetched
* ⚠️ **Robust Error Handling** — friendly messages for every failure case (see below)
* 📱 **Fully Responsive** — adapts to desktop, tablet, and mobile screens
* 🎨 **Custom Dark Theme** — consistent color palette with hover effects

---

## ⚠️ Error Handling

The application handles the main failure cases gracefully instead of crashing:

| Scenario | Behavior |
|---|---|
| ❌ Empty input | Prompts the user to enter a city name |
| 🏙️ City not found | Shows a "City not found" message |
| 🌐 Network / no internet | Shows a connection error message |

---

## 🛠️ Technologies Used

### 🌐 HTML5
Used for semantic page structure — search bar, weather card, and forecast sections.

### 🎨 CSS3
Used for layout (Flexbox & Grid), responsive design (media queries), transitions, and the overall visual theme.

### ⚡ JavaScript (ES6+)
Used for API calls with `fetch` and `async/await`, DOM manipulation, geolocation, unit conversion, and error handling with `try...catch`.

### ☁️ Weather API
Real-time data fetched from the **OpenWeatherMap API**.

---

## 📂 Project Structure

```text
Weather-Application/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/Weather-Application.git
```

### 2. Navigate to the Project Directory
```bash
cd Weather-Application
```

### 3. Add Your API Key
Get a free API key from [OpenWeatherMap](https://openweathermap.org/api) and add it in `script.js`:

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

### 4. Open in Browser
Simply open `index.html` — no build step or dependencies required.

---

## 💡 Key Concepts Demonstrated

* 🌐 Semantic HTML Structure
* 📱 Responsive Web Design
* 🔌 REST API Integration with Fetch & Async/Await
* 🛡️ Error Handling with try...catch
* 📍 Browser Geolocation API
* 🎨 UI Theming & Hover Effects

---

## 👩‍💻 Conclusion

This project demonstrates the ability to build a real-world, API-driven web application from scratch using core front-end technologies — HTML5, CSS3, and JavaScript — with reliable error handling and a clean responsive design, without any frameworks.

---

<p align="center">
  ⭐ <strong>If you find this project useful, consider giving it a star!</strong>
</p>

