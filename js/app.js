let $ = document;
let hamburgerElem = $.querySelector(".hamburger-btn");
let menuElem = $.querySelector(".menu");
let cover = $.querySelector(".openMenuCover");
let isMobileMenuOpen = false;

let menuLinkElem = $.querySelectorAll(".menu__link");

menuLinkElem.forEach((element) => {
  element.addEventListener("click", () => {
    $.querySelector(".menu__link--active").classList.remove(
      "menu__link--active"
    );
    element.classList.add("menu__link--active");
  });
});

////////////////////////////////
hamburgerElem.addEventListener("click", () => {
  // if (isMobileMenuOpen) {
  //   hamburgerElem.classList.remove("hamburger-btn--active");
  //   menuElem.classList.remove("menu--active");
  // } else {
  //   hamburgerElem.classList.add("hamburger-btn--active");
  //   menuElem.classList.add("menu--active");
  // }

  hamburgerElem.classList.toggle("hamburger-btn--active");
  menuElem.classList.toggle("menu--active");
  cover.classList.toggle("openMenuCover--active");
  isMobileMenuOpen = !isMobileMenuOpen;
});
