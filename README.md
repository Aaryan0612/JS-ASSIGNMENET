# 🌐 API Projects Using JavaScript Fetch

This repository contains two beginner-friendly projects built with **HTML**, **CSS**, and **JavaScript** to demonstrate how to fetch and display real-time weather data from external APIs using the **Fetch API**.[web:1][web:2]

---

## 📌 Overview

These projects are focused on learning how to work with:

- API workflows (request → response cycle)
- JSON data handling and parsing
- Asynchronous JavaScript using `async/await`
- Dynamic UI updates using DOM manipulation

Both projects use the **OpenWeather API** for geocoding and current weather data to build a strong foundation in API-based web development.[web:1][web:2]

---

## 📁 Projects Included

### 1️⃣ Weather Fetch Application (Basic)

A simple web application where the user enters a **city name** and the app fetches the **current temperature** using the OpenWeather API.[web:2]

**Key Learning Points:**

- Making basic API calls with `fetch()`
- Using `async/await` for asynchronous operations
- Parsing JSON responses
- Dynamically updating the DOM to show API results

---

### 2️⃣ Weather Display Widget (Advanced)

A compact, widget-style weather component that dynamically displays temperature for any user-entered city.[web:2]

**Improvements Over the Basic App:**

- Reusable, widget-like UI component
- Cleaner layout and more structured styling
- Better user input handling
- Demonstrates how a real-world widget can consume an external API

---

## 🧠 Core Concepts Covered

- **Fetch API** – Making HTTP requests from the browser
- **REST APIs** – Communicating with external services
- **JSON** – Parsing and using structured data from APIs
- **Async / Await** – Handling asynchronous calls cleanly
- **DOM Manipulation** – Updating the page with fetched data
- **Error Handling** – Handling invalid input or failed requests
- **Geocoding** – Converting city names to latitude/longitude[web:2]
- **Dynamic Web Content** – Rendering content based on live data

---

## 🔄 Common Workflow

Both projects use the same two-step approach:

1. User enters a **city name**.
2. The city name is sent to the **Geocoding API** to get coordinates (latitude, longitude).[web:2]
3. The returned coordinates are sent to the **Current Weather API**.[web:2]
4. The API responds with weather data in **JSON** format.[web:2]
5. The temperature is extracted from the JSON.
6. The UI dynamically displays the temperature to the user.

This two-step flow is necessary because the **Current Weather API** expects **coordinates** (lat, lon) rather than raw city names in its standard form.[web:2]

---

## 🛠️ Technologies Used

- **HTML** – Page structure
- **CSS** – Basic styling and widget layout
- **JavaScript** – Application logic and API calls
- **OpenWeather API** – Geocoding and current weather endpoints[web:1][web:2]

---

## 📂 Repository Structure

```bash
api-projects/
│
├── weather-fetch-app/
│   └── index.html
│
├── weather-widget/
│   └── index.html
│
└── README.md
