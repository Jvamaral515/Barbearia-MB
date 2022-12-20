// DOM access
const menu = document.querySelector(".mobile__menu");
const navList = document.querySelector(".nav__list");
const navLink = document.querySelector(".nav__link");
const openModal = document.querySelector(".cta");
const closeModal = document.querySelector(".close__button");
const modal = document.querySelector(".modal");

// function for hamburger menu and the nav
menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navList.classList.toggle("active");
});

// modal config
openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})