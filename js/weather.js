class Weather {
	constructor(city, country) {
		this.apiKey = "91b249dea995c1975d0c7d1a0dabfb7d";
		this.city = city;
		this.country = country;
	}
	// Fetch weather from api
	async getWeather() {
		const response =
			await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}
            
        `);

		const responseData = await response.json();
		const imageResponse =
			await `https://openweathermap.org/img/wn/${responseData.weather[0].icon}@2x.png`;

		// Returns promise
		return {
			responseData,
			imageResponse,
		};
	}

	// Change weather location
	changeLocation(city, country) {
		this.city = city;
		this.country = country;
	}
}
