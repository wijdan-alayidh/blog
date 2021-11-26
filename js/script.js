// variables
const openMenu = document.querySelector("nav i.fa-bars");
const closeMenu = document.querySelector("nav i.fa-times");
const menu = document.querySelector("nav .main-menu");
const body = document.querySelector("body");

// open menu state
openMenu.addEventListener("click", () => {
  menu.classList.add("open");
  closeMenu.classList.add("open");
  body.style.overflow = "hidden";
});

// close menu state
closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
  closeMenu.classList.remove("open");
  body.style.overflow = "unset";
});
