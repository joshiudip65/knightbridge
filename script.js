const buttons = document.querySelectorAll(".bed-plan");
const cards = document.querySelectorAll(".card-head");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the active class from all buttons
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    // Add the active class to the clicked button
    button.classList.add("active");

    // Hide all cards
    cards.forEach((card) => {
      card.classList.remove("show");
      card.classList.add("hidden");
    });

    // Show the card with the same data-bed attribute as the clicked button
    const bed = button.dataset.bed;
    const card = document.querySelector(`.card-head[data-bed="${bed}"]`);
    card.classList.remove("hidden");
    card.classList.add("show");
  });
});
