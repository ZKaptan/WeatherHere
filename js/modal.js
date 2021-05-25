class Modal {
	constructor() {
		this.openModalButton = document.querySelector("[data-modal-target]");
		this.closeModalButton = document.querySelector("[data-close-button]");
		this.overlay = document.getElementById("overlay");
		this.submitButton = document.getElementById("submit-button");
	}

	openModal(modal) {
		if (modal == null) {
			return;
		}
		console.log(modal);
		modal.classList.add("active");
		overlay.classList.add("active");
	}

	closeModal(modal) {
		if (modal == null) {
			return;
		}
		modal.classList.remove("active");
		overlay.classList.remove("active");
	}
}
