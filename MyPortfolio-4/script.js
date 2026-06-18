async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'a8af62574d9b081635868f7c6358f6ae';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const display = document.getElementById('weatherDisplay');
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found!");
        
        const data = await response.json();
        
        display.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        display.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}S