const modal = document.getElementById("reservation-modal");
const overlay = document.getElementById("modal-overlay");
const propertyName = document.getElementById("property-name");
const reserveButtons = document.querySelectorAll(".reserve-btn");
const cancelButton = document.getElementById("cancel-reservation");
const form = document.getElementById("reservation-form");

function openModal(property) {
  propertyName.textContent = `Propiedad seleccionada: ${property}`;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

reserveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openModal(button.dataset.property);
  });
});

overlay.addEventListener("click", closeModal);

cancelButton.addEventListener("click", () => {
  const confirmCancel = window.confirm(
    "¿Seguro que deseas cancelar la reservación? Se perderán los datos ingresados."
  );

  if (confirmCancel) {
    form.reset();
    closeModal();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  window.alert("Reservación enviada correctamente.");
  form.reset();
  closeModal();
});
