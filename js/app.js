// Init Storage object
const storage = new Storage();

// Init Modal object
const mainModal = new Modal();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init new UI object
const ui = new UI();

// Global city and country variables
let city = storage.city;
let country = storage.country;

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.querySelector(".submit-data").addEventListener("click", (e) => {
	city = document.getElementById("city").value;
	country = document.getElementById("country").value;

	// Change the location depending on user input
	weather.changeLocation(city, country);

	// Get and display weather (function handles errors)
	getWeather();
});

// Event listener for modal open button
mainModal.openModalButton.addEventListener("click", () => {
	const modal = document.querySelector("#modal");
	mainModal.openModal(modal);
});
// Event listener for overlay click to close modal (only applicable when modal is open)
mainModal.overlay.addEventListener("click", () => {
	const modal = document.querySelector(".modal");
	mainModal.closeModal(modal);
});

// Event listener for close modal button
mainModal.closeModalButton.addEventListener("click", () => {
	const modal = document.querySelector("#modal");
	mainModal.closeModal(modal);
});

// Displays weather data to the user (checks if api fetch was successful and formats a result)
function getWeather() {
	weather
		.getWeather()
		.then((results) => {
			ui.clearAlert();
			const modal = document.querySelector("#modal");
			mainModal.closeModal(modal);
			ui.paint(results);
			storage.setLocationData(city, country);
		})
		.catch((err) => {
			ui.clearAlert();
			console.log(err);
			ui.showError("Location Not found", "alert");
		});
}
