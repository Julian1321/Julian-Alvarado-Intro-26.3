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

const temperatureButton = document.getElementById("temperature-button");
const conditionsButton = document.getElementById("conditions-button");

temperatureButton.addEventListener("click", () => {
    const temperatureUrl =
        "https://api.open-meteo.com/v1/forecast?latitude=53.4808,41.8781&longitude=-2.2426,-87.6298&current=temperature_2m&temperature_unit=fahrenheit";

    fetch(temperatureUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Temperature request failed");
            }

            return response.json();

        })
        .then((data) => {
            document.getElementById("weather-heading").innerText =
                "Temperature Comparison";

            document.getElementById("manchester-result").innerText =
                `Manchester: ${data[0].current.temperature_2m}°F`;
            
            document.getElementById("chicago-result").innerText =
                `Chicago: ${data[1].current.temperature_2m}°F`;

        })
        .catch((error) => {
            console.error(error);
        });

            
    
});

conditionsButton.addEventListener("click", () => {
    const conditionsUrl =
        "https://api.open-meteo.com/v1/forecast?latitude=53.4808,41.8781&longitude=-2.2426,-87.6298&current=weather_code";

    fetch(conditionsUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error ("Weather conditions request failed");

            }

            return response.json();

        })
        .then((data) => {
            document.getElementById("weather-heading").innerText =
                "Weather Conditions Comparison";

            document.getElementById("manchester-result").innerText =
                `Manchester: ${getWeatherDescription(data[0].current.weather_code)}`;

            document.getElementById("chicago-result").innerText =
                `Chicago: ${getWeatherDescription(data[1].current.weather_code)}`;
            
        })
        .catch((error) => {
            console.error(error);

            document.getElementById("Weather-heading").innerText =
                "Temperature Comparison";

            document.getElementById("manchester-result").innerText =
                "Unable to load temperature data.";

            document.getElementById("chicago-result").innerText = "";
        });
});
