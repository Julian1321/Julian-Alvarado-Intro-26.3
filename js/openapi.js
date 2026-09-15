function getWeatherDescription(code) {
    if (code === 0) {
        return "Clear sky";
    } else if (code === 1) {
        return "Mainly clear";
    } else if (code === 2) {
        return "Partly cloudy";
    } else if (code === 3) {
        return "Overcast";
    } else {
        return "Other weather conditions";
    }
}

const manchesterUrl = 
    "https://api.open-meteo.com/v1/forecast?latitude=53.4808&longitude=-2.2426&current=temperature_2m,weather_code&temperature_unit=fahrenheit";

fetch(manchesterUrl)
    .then ((response) => {
        if (!response.ok) {
            throw new Error("Manchester weather request failed");

        }

        return response.json();
    })
    .then((data) => {
        console.log("Manchester:", data);

        document.getElementById("manchester-temperature").innerText =
            `Temperature: ${data.current.temperature_2m}°F`;

        document.getElementById("manchester-weather").innerText =
            `Weather: ${getWeatherDescription(data.current.weather_code)}`;
    })
    .catch((error) => {
        console.error(error);
    });

const chicagoUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=41.8781&longitude=-87.6298&current=temperature_2m,weather_code&temperature_unit=fahrenheit";

fetch(chicagoUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Chicago weather request failed");
        }
        
        return response.json();
})
        .then((data) => {
            console.log("Chicago:", data);
            
            document.getElementById("chicago-temperature").innerText =
                `Temperature: ${data.current.temperature_2m}°F`;

            document.getElementById("chicago-weather").innerText =
                `Weather: ${getWeatherDescription(data.current.weather_code)}`;
        })
        .catch((error) => {
            console.error(error);
        });
        
