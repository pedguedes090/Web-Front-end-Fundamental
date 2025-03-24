const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
}
let name = document.getElementById("name");
let information = document.getElementById("information");  
let btn = document.getElementById("searchBtn");
let search = document.getElementById("search");

btn.onclick = function() {
    information.innerHTML = "";
    const city = search.value;
    if (weatherData[city]) {
        let nameCity = document.createElement("h2");
        nameCity.innerHTML = city;
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="icon">${weatherData[city].icon}</td>
            <td class"temperature">${weatherData[city].temperature}°C</td>
            <td>
            ${weatherData[city].description}<br>
            Độ ẩm: ${weatherData[city].humidity}%<br>
            Tốc độ gió: ${weatherData[city].windSpeed} km/h<br>
            
            </td>
        `;
        information.appendChild(nameCity);
        information.appendChild(tr);
        
    } else {
        alert("Không tìm thấy thành phố");
    }
}