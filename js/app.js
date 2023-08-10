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

// explore
let exploreNext = $.querySelector(".explore__next");
let explorePre = $.querySelector(".explore__pre");
let exploreSlider = $.querySelector(".explore__slider");
exploreNext.addEventListener("click", () => {
  console.log(exploreSlider);
  exploreSlider.style.marginLeft = "-200%";
  explorePre.classList.add("explore__btn--active");
  explorePre.innerHTML = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.42513 3.35924H11.12C11.4735 3.35924 11.76 3.64578 11.76 3.99924C11.76 4.35271 11.4735 4.63924 11.12 4.63924H2.42513L4.50042 6.71453C4.75035 6.96447 4.75035 7.3697 4.50042 7.61963C4.25048 7.86957 3.84526 7.86957 3.59532 7.61963L0.88003 4.90434C0.380159 4.40447 0.380159 3.59402 0.88003 3.09415L3.59532 0.378858C3.84526 0.128922 4.25048 0.128922 4.50042 0.378858C4.75035 0.628793 4.75035 1.03402 4.50042 1.28395L2.42513 3.35924Z" fill="white"/>
  </svg>
  `;
  exploreNext.classList.remove("explore__btn--active");
  exploreNext.innerHTML = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.57487 3.35924H0.87997C0.526507 3.35924 0.23997 3.64578 0.23997 3.99924C0.23997 4.35271 0.526507 4.63924 0.87997 4.63924H9.57487L7.49958 6.71453C7.24965 6.96447 7.24965 7.3697 7.49958 7.61963C7.74952 7.86957 8.15474 7.86957 8.40468 7.61963L11.12 4.90434C11.6198 4.40447 11.6198 3.59402 11.12 3.09415L8.40468 0.378858C8.15474 0.128922 7.74952 0.128922 7.49958 0.378858C7.24965 0.628793 7.24965 1.03402 7.49958 1.28395L9.57487 3.35924Z" fill="#191825"/>
  </svg>
  `;
});

explorePre.addEventListener("click", () => {
  exploreSlider.style.marginLeft = "0";
  explorePre.classList.remove("explore__btn--active");
  explorePre.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.42513 7.35924H13.12C13.4735 7.35924 13.76 7.64578 13.76 7.99924C13.76 8.35271 13.4735 8.63924 13.12 8.63924H4.42513L6.50042 10.7145C6.75035 10.9645 6.75035 11.3697 6.50042 11.6196C6.25048 11.8696 5.84526 11.8696 5.59532 11.6196L2.88003 8.90434C2.38016 8.40447 2.38016 7.59402 2.88003 7.09415L5.59532 4.37886C5.84526 4.12892 6.25048 4.12892 6.50042 4.37886C6.75035 4.62879 6.75035 5.03402 6.50042 5.28395L4.42513 7.35924Z" fill="#191825"></path>
</svg>`;

  exploreNext.classList.add("explore__btn--active");
  exploreNext.innerHTML = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.57487 3.35924H0.87997C0.526507 3.35924 0.23997 3.64578 0.23997 3.99924C0.23997 4.35271 0.526507 4.63924 0.87997 4.63924H9.57487L7.49958 6.71453C7.24965 6.96447 7.24965 7.3697 7.49958 7.61963C7.74952 7.86957 8.15474 7.86957 8.40468 7.61963L11.12 4.90434C11.6198 4.40447 11.6198 3.59402 11.12 3.09415L8.40468 0.378858C8.15474 0.128922 7.74952 0.128922 7.49958 0.378858C7.24965 0.628793 7.24965 1.03402 7.49958 1.28395L9.57487 3.35924Z" fill="#fff"/>
  </svg>
  `;
});

// subscribe
let inputWrapperElem = $.querySelector(".subscribe__input-wrapper");
let inputElem = $.querySelector(".subscribe__input");
let subBtnElm = $.querySelector(".subscribe__btn");
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
subBtnElm.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailRegex.test(inputElem.value)) {
    inputWrapperElem.classList.remove("subscribe__input-wrapper--red");
    alert("subscribed");
    inputElem.value = "";
  } else {
    inputWrapperElem.classList.add("subscribe__input-wrapper--red");
  }
});
inputElem.addEventListener("keydown", () => {
  inputWrapperElem.classList.remove("subscribe__input-wrapper--red");
});

// footer
let footerElem = $.querySelectorAll(".footer__item");

footerElem.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.nodeName === "P" || e.target.nodeName === "svg") {
      item.classList.toggle("footer__item--active");
    }
  });
});
