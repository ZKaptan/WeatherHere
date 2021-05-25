class UI {
	// Instance variables for UI Object
	constructor() {
		this.location = document.getElementById("w-location");
		this.desc = document.getElementById("w-desc");
		this.string = document.getElementById("w-string");
		this.details = document.getElementById("w-details");
		this.icon = document.getElementById("w-icon");
		this.humidity = document.getElementById("w-humidity");
		this.feelsLike = document.getElementById("w-feels-like");
		this.pressure = document.getElementById("w-pressure");
		this.wind = document.getElementById("w-wind");
	}
	// Paint the document with correct data about weather

	paint(weather) {
		this.location.textContent = `${weather.responseData.name}, ${weather.responseData.sys.country}`;
		this.desc.textContent = weather.responseData.weather[0].description;
		this.string.textContent = `${(
			((weather.responseData.main.temp - 273.15) * 9) / 5 +
			32
		).toFixed(1)} F (${(weather.responseData.main.temp - 273.15).toFixed(
			1
		)} C)`;
		this.icon.setAttribute("src", weather.imageResponse);
		this.humidity.textContent = `Relative humidity: ${weather.responseData.main.humidity}%`;
		this.pressure.textContent = `Relative pressure: ${(
			weather.responseData.main.pressure / 10
		).toFixed(1)} KPA`;
		this.feelsLike.textContent = `Feels Like: ${(
			((weather.responseData.main.feels_like - 273.15) * 9) / 5 +
			32
		).toFixed(1)} F (${(weather.responseData.main.feels_like - 273.15).toFixed(
			1
		)} C)`;
		this.wind.textContent = `Wind speed: ${weather.responseData.wind.speed.toFixed(
			1
		)} MPH`;
	}

	showError(message, className) {
		const div = document.createElement("div");

		div.className = className;

		div.textContent = message;

		div.style.color = "#DC143C";

		const container = document.querySelector(".modal-footer");

		container.insertBefore(div, container.firstChild);
	}

	clearAlert() {
		const currentAlert = document.querySelector(".alert");
		if (currentAlert) {
			currentAlert.remove();
		}
	}
}
