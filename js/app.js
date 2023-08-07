let $ = document;

// hamburger button
let hamburgerElem = $.querySelector(".hamburger-btn");
let menuElem = $.querySelector(".menu");
let cover = $.querySelector(".openMenuCover");
let isMobileMenuOpen = false;

hamburgerElem.addEventListener("click", () => {
  hamburgerElem.classList.toggle("hamburger-btn--active");
  menuElem.classList.toggle("menu--active");
  cover.classList.toggle("openMenuCover--active");
  isMobileMenuOpen = !isMobileMenuOpen;
});

// menu link //todo
let menuLinkElem = $.querySelectorAll(".menu__link");

menuLinkElem.forEach((element) => {
  element.addEventListener("click", () => {
    $.querySelector(".menu__link--active").classList.remove(
      "menu__link--active"
    );
    element.classList.add("menu__link--active");
  });
});

// sevices hover
let sevicesItemElem = $.querySelectorAll(".services__item");
sevicesItemElem.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    sevicesItemElem[1].classList.remove("services__item--active");

    element.classList.add("services__item--active");
  });
  element.addEventListener("mouseleave", () => {
    element.classList.remove("services__item--active");

    sevicesItemElem[1].classList.add("services__item--active");
  });
});
