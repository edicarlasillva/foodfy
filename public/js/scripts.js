// Modal

const modalOverlay = document.querySelector(".overlay");
const cards = document.querySelectorAll(".card");
const close = document.querySelector(".close");

for (let card of cards) {
  card.addEventListener("click", () => {
    modalOverlay.classList.add("is-active");
  });
}

document.querySelector(".close").addEventListener("click", () => {
  modalOverlay.classList.remove("is-active");
});

// Menu

let show = true;

const menu = document.querySelector(".menu");
const menuToggle = menu.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  menu.classList.toggle("on", show);
  show = !show;
});
